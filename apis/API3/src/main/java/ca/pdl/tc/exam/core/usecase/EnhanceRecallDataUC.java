package ca.pdl.tc.exam.core.usecase;

import ca.pdl.tc.exam.core.gateway.VehicalRecallCacheGateway;
import ca.pdl.tc.exam.core.gateway.VehicalRecallGateway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class EnhanceRecallDataUC {

    @Autowired
    VehicalRecallGateway vehicalRecallGateway;

    @Autowired
    VehicalRecallCacheGateway vehicalRecallCacheGateway;

    public List<Map<String, String>> addAttribute(List<Map<String, String>> recalls, String... attributeList ) {

        List<Map<String, String>> result = recalls.stream()
                .parallel()
                .map( recall -> {
                        Map<String, String> summary = vehicalRecallGateway.getRecallSummary(recall.get("recallNumber"));
                        for(String attrName: attributeList) {
                            recall.put(attrName, summary.get(attrName));
                        }
                        return recall;
                    })
                .collect(Collectors.toList());

        vehicalRecallCacheGateway.save(result);
        return result;
    }

}
