package ca.pdl.tc.exam.rest;

import ca.pdl.tc.exam.RestUtil;
import ca.pdl.tc.exam.VRDAPIApplication;
import org.junit.jupiter.api.Test;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;

import java.util.List;
import java.util.Map;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@EnableAutoConfiguration
@ContextConfiguration(classes = {VRDAPIApplication.class})
@ActiveProfiles("test")
public class SearchVehicleRecallsTest {


    @Test
    public void testPostWith_FrenchValue() {
        //Given
         RestUtil.postToVehicleRecalls("largeList.json");

        //When
        List<Map<String, String>> results = RestUtil.searchVehicleRecalls("Freins");

        System.out.println(results);
//
//        //Then
//        assertEquals(225, results.size());
    }


}
