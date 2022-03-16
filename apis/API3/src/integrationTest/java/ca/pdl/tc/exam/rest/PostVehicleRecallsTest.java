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
public class PostVehicleRecallsTest {

    @Autowired
    private RestTemplate restTemplate;

    private MockRestServiceServer mockServer;

    @BeforeEach
    public void setup() {
        mockServer = MockRestServiceServer.createServer(restTemplate);
    }

    @Test
    public void testPostWith_ValidData() {

        //Given
        RestUtil.mockVRDResponse(mockServer,".*", 2, "vrdAnyResponse.json");

        //When
        List<Map<String, String>> results = RestUtil.postToVehicleRecalls("simpleVRList.json");

        //Then
        assertEquals(2, results.size());
        assertEquals("Any System Type", results.get(0).get("SYSTEM_TYPE_ETXT"));
    }



    @Test
    public void testPostWith_EmptyList() {

        //When
        List<Map<String, String>> results = RestUtil.postToVehicleRecalls("emptyList.json");

        //Then
        assertEquals(0, results.size());
    }
    @Test
    public void testPostWith_EmptyValues() {


        //When
        List<Map<String, String>> results = RestUtil.postToVehicleRecalls("emptyValues.json");

        //Then
        assertEquals(1, results.size());
        assertTrue(results.get(0).containsKey("SYSTEM_TYPE_ETXT"));
        assertNull(results.get(0).get("SYSTEM_TYPE_ETXT"));

    }
    @Test
    public void testPostWith_ExtraValues() {

        //Given
        RestUtil.mockVRDResponse(mockServer,".*", 1, "vrdAnyResponse.json");

        //When
        List<Map<String, String>> results = RestUtil.postToVehicleRecalls("extraValues.json");

        //Then
        assertEquals(1, results.size());
        assertTrue(results.get(0).containsKey("extra"));
        assertEquals("carryAlong",results.get(0).get("extra"));

    }
    @Test
    public void testPostWith_LargeList() {

        //Given
        RestUtil.mockVRDResponse(mockServer, ".*", 225, "vrdAnyResponse.json");

        //When
        List<Map<String, String>> results = RestUtil.postToVehicleRecalls("largeList.json");

        //Then
        assertEquals(225, results.size());
    }

}
