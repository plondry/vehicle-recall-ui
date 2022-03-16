package ca.pdl.tc.exam.provider.vrdrest;

import ca.pdl.tc.exam.core.gateway.VehicalRecallGateway;
import ca.pdl.tc.exam.provider.vrdrest.model.RecallAttribute;
import ca.pdl.tc.exam.provider.vrdrest.model.Response;
import ca.pdl.tc.exam.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class VehicalRecallDBProvider implements VehicalRecallGateway {

    @Value("${ca.gc.tc.exam.vrd-url-template}")
    private String vrdURLTemplate;

    @Autowired
    RestTemplate restTemplate;

    public Map<String, String> getRecallSummary(String recallNum) {

        if(!StringUtils.hasLength(recallNum))
            return new HashMap<>();

        String request = String.format(vrdURLTemplate, recallNum);

        Response response = restTemplate.getForObject(request, Response.class);

        List<Map<String, String>> summaryList = response.getSummaryList().stream()
                .map( attrList -> {
                    Map<String, String> result = new HashMap<>();
                    for(RecallAttribute ra : attrList) {
                        result.put(StringUtil.toCamelCase(ra.getName()), ra.getLiteral().getLiteral());
                    }
                    return result;
                }).collect(Collectors.toList());
        if(summaryList.size() > 0)
            return summaryList.get(0);

        return new HashMap<>();
    }



}
