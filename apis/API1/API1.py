import requests
import json
import ssl
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
ssl._create_default_https_context = ssl._create_unverified_context



def main():
    getVehicleRecallStartData()
    

def getVehicleRecallStartData():
     with open('CSCompVehicleRecallStart.json') as f:
    
        VehicleRecallStartData = json.load(f)
        

        index = 0
        headers = {'content-type': 'application/json'}
        APIONE_ENDPOINT = 'http://localhost:3001/v1/api/vehicle-recalls//'

        for i in range(0,len(VehicleRecallStartData)):
            
            recallNumber=VehicleRecallStartData[i]["recallNumber"]
            manufactureName=VehicleRecallStartData[i]["manufactureName"]
            makeName=VehicleRecallStartData[i]["makeName"]
            modelName=VehicleRecallStartData[i]["modelName"]
            recallYear=VehicleRecallStartData[i]["recallYear"]
           # recall# 2017464 data does not exist
           #exclude from get request 
            if "2017464" not in recallNumber:
                response = requests.request("GET", 'https://data.tc.gc.ca/v1.3/api/eng/vehicle-recall-database/recall-summary/recall-number/'+recallNumber+'?format=json', verify = False)
                data = response.json()
                manufacturerRecallNoTxt = json.dumps(data["ResultSet"][0][1]["Value"]["Literal"], indent=4)
                categoryEtxt= None
                categoryFtxt=None
                systemTypeEtxt=None
                systemTypeFtxt=None
                notificationTypeEtxt=None
                notificationTypeFtxt=None



                str_manufacturerRecallNoTxt=manufacturerRecallNoTxt.replace('"','')


                data={"recallNumber":recallNumber,"manufactureName":manufactureName,"makeName":makeName,"modelName":modelName,"recallYear":recallYear,"manufacturerRecallNoTxt":str_manufacturerRecallNoTxt,
                "categoryEtxt":categoryEtxt,"categoryFtxt":categoryFtxt,"systemTypeEtxt":systemTypeEtxt,"systemTypeFtxt":systemTypeFtxt,"notificationTypeEtxt":notificationTypeEtxt,"notificationTypeFtxt":notificationTypeFtxt}
                print(data)
                r = requests.post(APIONE_ENDPOINT, json=data,  headers=headers)
                print(r.status_code)
            else:
                #for data that does no exist
                #set mstr_manufacturer_recall_no_txt to "DNE"-DOES NOT EXISIT
                str_manufacturerRecallNoTxt=None
                data={"recallNumber":recallNumber,"manufactureName":manufactureName,"makeName":makeName,"modelName":modelName,"recallYear":recallYear,"manufacturerRecallNoTxt":str_manufacturerRecallNoTxt,
                "categoryEtxt":categoryEtxt,"categoryFtxt":categoryFtxt,"systemTypeEtxt":systemTypeEtxt,"systemTypeFtxt":systemTypeFtxt,"notificationTypeEtxt":notificationTypeEtxt,"notificationTypeFtxt":notificationTypeFtxt}
                print(data)
                r = requests.post(APIONE_ENDPOINT, json=data,  headers=headers)
                print(r.status_code)
        print("All Data Succesfull posted to API1")


main()