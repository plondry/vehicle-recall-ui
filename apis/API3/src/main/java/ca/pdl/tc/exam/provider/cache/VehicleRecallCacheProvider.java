package ca.pdl.tc.exam.provider.cache;

import ca.pdl.tc.exam.core.gateway.VehicalRecallCacheGateway;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.ApplicationScope;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
@ApplicationScope
public class VehicleRecallCacheProvider implements VehicalRecallCacheGateway {

    private volatile List<Map<String, String>> vehicleRecallCache;

    @Override
    public void save(List<Map<String, String>> vehicleRecallList) {
        this.vehicleRecallCache = vehicleRecallList;
    }

    @Override
    public List<Map<String, String>> getList() {
        if(vehicleRecallCache == null)
            return List.of();
        return new ArrayList<>(this.vehicleRecallCache);
    }

}
