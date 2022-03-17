using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.IO;
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using TCVrdWebApi.Models;
using Microsoft.AspNetCore.Cors;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TCVrdWebApi.Controllers
{
    [EnableCors("PolicyAllowAny")]
    //[Route("api/[controller]")]
    [Route("v1/api/vehicle-recalls")]
    [ApiController]
    public class VrdProcessorApi4Controller : ControllerBase
    {
        const string VehicleRecallApiFilePath = @".\Data\CSCompVehicleRecallApi4.json";
       
        [HttpGet]
        public IEnumerable<RecallItem> Get()
        {           
            var strRecall = System.IO.File.ReadAllText(VehicleRecallApiFilePath);
            var recallItems = JsonConvert.DeserializeObject<IEnumerable<RecallItem>>(strRecall);
            return recallItems;
        }
        
        //[HttpGet("manufacturer-recall-no-txt/{manufacturerRecallNoTxt}")]
        [HttpGet("search")]
        public IEnumerable<RecallItem> Get([FromQuery] string value)
        {            
            var strRecall = System.IO.File.ReadAllText(VehicleRecallApiFilePath);
            var recallItems = JsonConvert.DeserializeObject<IEnumerable<RecallItem>>(strRecall);                                 
            

            return recallItems.Where(item => { return item.NotificationTypeEtxt == value || item.NotificationTypeFtxt == value; });
        }
        
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Object obj)
        {            
            var recallItems = JsonConvert.DeserializeObject<IEnumerable<RecallItem>>(obj.ToString());         

            HttpClient httpClient = new HttpClient();
            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            var tasks = recallItems.Select(async item =>
            {
                var url = $"http://data.tc.gc.ca/v1.3/api/eng/vehicle-recall-database/recall-summary/recall-number/{item.RecallNumber}?format=json";
                var responseMessage = await httpClient.GetAsync(url);
                responseMessage.EnsureSuccessStatusCode();

                var msg = await responseMessage.Content.ReadAsStringAsync();
                var recallResponse = JsonConvert.DeserializeObject<RecallResponse>(msg);
                if (recallResponse?.ResultSet.Count > 0)
                {
                    //I have tested if the following property is unique for a given recall number:
                    // MANUFACTURER_RECALL_NO_TXT, SYSTEM_TYPE_ETXT, NOTIFICATION_TYPE_ETXT are unique, but CATEGORY_ETXT is not unique.
                    item.NotificationTypeEtxt = recallResponse.ResultSet[0].Where(item => item.Name == "NOTIFICATION_TYPE_ETXT").First().Value.Literal;
                    item.NotificationTypeFtxt = recallResponse.ResultSet[0].Where(item => item.Name == "NOTIFICATION_TYPE_FTXT").First().Value.Literal;                    
                }

                return item;
            });

            recallItems = await Task.WhenAll(tasks);

            var apiOutput = JsonConvert.SerializeObject(recallItems);
            System.IO.File.WriteAllText(VehicleRecallApiFilePath, apiOutput);            
            return new OkObjectResult(recallItems);            
        }        
    }
}
