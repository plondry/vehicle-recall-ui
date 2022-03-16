package ca.pdl.tc.exam.endpoint.rest;

import ca.pdl.tc.exam.core.gateway.VehicalRecallCacheGateway;
import ca.pdl.tc.exam.core.usecase.EnhanceRecallDataUC;
import ca.pdl.tc.exam.core.usecase.SearchVehicleRecallListUC;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/v1/api/vehicle-recalls")
@Tag(name = "Recall System Type Enhancer")
public class VehicleRecallEnhancerController {

    @Value("${ca.gc.tc.exam.attributes}")
    private String[] attributeList;

    @Autowired
    VehicalRecallCacheGateway vehicalRecallCacheGateway;

    @Autowired
    EnhanceRecallDataUC enhanceRecallDataUC;

    @Autowired
    SearchVehicleRecallListUC searchVehicleRecallListUC;

    @PostMapping
    public List<Map<String, String>> addVehicleRecallList(@RequestBody List<Map<String, String>> vrList) {

        return enhanceRecallDataUC.addAttribute(vrList, attributeList);

    }

    @GetMapping
    public List<Map<String, String>> getVehicleRecallList() {

        return vehicalRecallCacheGateway.getList();

    }

    @GetMapping(path="/search")
    public List<Map<String, String>> searchVehicleRecallList(@RequestParam String value) {

        return searchVehicleRecallListUC.searchList(value, attributeList);

    }

}
