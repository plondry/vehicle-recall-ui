package ca.pdl.tc.exam.core.gateway;

import java.util.Map;

public interface VehicalRecallGateway {
    Map<String, String> getRecallSummary(String recallNum);
}
