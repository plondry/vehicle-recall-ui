package ca.pdl.tc.exam.rest;

import ca.pdl.tc.exam.RestUtil;
import ca.pdl.tc.exam.VRDAPIApplication;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.client.MockRestServiceServer;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@EnableAutoConfiguration
@ContextConfiguration(classes = {VRDAPIApplication.class})
@ActiveProfiles("test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public class GetVehicleRecallsTest {

    @Autowired
    private RestTemplate restTemplate;

    private MockRestServiceServer mockServer;

    @BeforeEach
    public void setup() {
        mockServer = MockRestServiceServer.createServer(restTemplate);
    }

    @Test
    public void testGetWith_NoPriorPost() {

        //When
        List<Map<String, String>> results = RestUtil.getToVehicleRecalls();

        System.out.println(results);
        //Then
        assertEquals(0, results.size());
    }

    @Test
    public void testGetWith_EmptyListPost() {

        //Given
        RestUtil.postToVehicleRecalls("emptyList.json");

        //When
        List<Map<String, String>> results = RestUtil.getToVehicleRecalls();

        //Then
        assertEquals(0, results.size());
    }
    @Test
    public void testGetWith_EmptyValuesPost() {

        //Given
        RestUtil.postToVehicleRecalls("emptyValues.json");

        //When
        List<Map<String, String>> results = RestUtil.getToVehicleRecalls();

        //Then
        assertEquals(1, results.size());
        assertTrue(results.get(0).containsKey("SYSTEM_TYPE_ETXT"));
        assertNull(results.get(0).get("SYSTEM_TYPE_ETXT"));

    }
    @Test
    public void testGetWith_ExtraValuesPost() {

        //Given
        RestUtil.mockVRDResponse(mockServer, ".*", 1, "vrdAnyResponse.json");
        RestUtil.postToVehicleRecalls("extraValues.json");

        //When
        List<Map<String, String>> results = RestUtil.getToVehicleRecalls();

        //Then
        assertEquals(1, results.size());
        assertTrue(results.get(0).containsKey("extra"));
        assertEquals("carryAlong",results.get(0).get("extra"));

    }

    @Test
    public void testPostWith_LargeList() {

        //Given
        RestUtil.mockVRDResponse(mockServer, ".*", 225, "vrdAnyResponse.json");
        RestUtil.postToVehicleRecalls("largeList.json");

        //When
        List<Map<String, String>> results = RestUtil.getToVehicleRecalls();

        //Then
        assertEquals(225, results.size());
    }


}
