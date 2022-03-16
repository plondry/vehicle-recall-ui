package ca.pdl.tc.exam.core.usecase;

import ca.pdl.tc.exam.core.gateway.VehicalRecallCacheGateway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SearchVehicleRecallListUC {

    @Autowired
    VehicalRecallCacheGateway vehicalRecallCacheGateway;

    public List<Map<String, String>> searchList(String value, String... fields) {

        if(value == null)
            return new ArrayList<>();

        List<Map<String, String>> vrList = vehicalRecallCacheGateway.getList();

        return vrList.stream().filter(vr -> {
            boolean found = false;
            for(String field: fields) {
                if(vr.get(field) != null) {
                    found = vr.get(field).toLowerCase().startsWith(value.toLowerCase()) | found;
                }
            }
            return found;
        }).collect(Collectors.toList());

    }

}
