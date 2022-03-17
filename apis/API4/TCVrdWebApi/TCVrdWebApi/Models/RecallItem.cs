using Newtonsoft.Json;
namespace TCVrdWebApi.Models
{
    public class RecallItem
    {
        [JsonProperty("recallNumber")]
        public string RecallNumber { get; set; }

        [JsonProperty("manufactureName")]
        public string ManufactureName { get; set; }

        [JsonProperty("makeName")]
        public string MakeName { get; set; }

        [JsonProperty("modelName")]
        public string ModelName { get; set; }

        [JsonProperty("recallYear")]
        public string RecallYear { get; set; }

        [JsonProperty("manufacturerRecallNoTxt")]
        public string ManufacturerRecallNoTxt { get; set; }

        [JsonProperty("categoryEtxt")]
        public string CategoryEtxt { get; set; }

        [JsonProperty("categoryFtxt")]
        public string CategoryFtxt { get; set; }

        [JsonProperty("systemTypeEtxt")]
        public string SystemTypeEtxt { get; set; }

        [JsonProperty("systemTypeFtxt")]
        public string SystemTypeFtxt { get; set; }

        [JsonProperty("notificationTypeEtxt")]
        public string NotificationTypeEtxt { get; set; }

        [JsonProperty("notificationTypeFtxt")]
        public string NotificationTypeFtxt { get; set; }     
    }
}
