package ca.pdl.tc.exam.core.gateway;

import java.util.List;
import java.util.Map;

public interface VehicalRecallCacheGateway {

    void save(List<Map<String, String>> vehicleRecallList);

    List<Map<String, String>> getList();
}
