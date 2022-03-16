package ca.pdl.tc.exam;

import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.client.ExpectedCount;
import org.springframework.test.web.client.MockRestServiceServer;

import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.with;
import static org.hamcrest.Matchers.matchesPattern;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.method;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.requestTo;
import static org.springframework.test.web.client.response.MockRestResponseCreators.withStatus;

public class RestUtil
{
    public static List<Map<String, String>> postToVehicleRecalls(String s) {

        String file = FileUtil.getContentAsString(s);

        return with().body(file)
                .contentType("application/json")
                .when()
                .request("POST", "http://localhost:9000/v1/api/vehicle-recalls")
                .getBody().as(List.class);
    }
    public static List<Map<String, String>> getToVehicleRecalls() {

        return with()
                .when()
                .request("GET", "http://localhost:9000/v1/api/vehicle-recalls")
                .getBody().as(List.class);
    }

    public static List<Map<String, String>> searchVehicleRecalls(String value) {

        return with()
                .when()
                .request("GET", "http://localhost:9000/v1/api/vehicle-recalls/search?value="+value)
                .getBody().as(List.class);
    }

    public static void mockVRDResponse(MockRestServiceServer mockServer, String pattern, int times, String responseFile) {
        mockServer.expect(ExpectedCount.times(times),
                        requestTo(matchesPattern("http://localhost:9000/recall-summary/" + pattern)))
                .andExpect(method(HttpMethod.GET))
                .andRespond(withStatus(HttpStatus.OK)
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(FileUtil.getContentAsString("responses/" + responseFile))
                );
    }
}
