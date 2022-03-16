package ca.pdl.tc.exam.core.usecase;

import ca.pdl.tc.exam.core.gateway.VehicalRecallCacheGateway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class GetVehicleRecallListUC {

    @Autowired
    VehicalRecallCacheGateway vehicalRecallCacheGateway;

    public List<Map<String, String>> getList() {

        return vehicalRecallCacheGateway.getList();
    }

}
