package ca.pdl.tc.exam.provider.vrdrest.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class Response {

    @JsonProperty("ResultSet")
    private List<List<RecallAttribute>> summaryList;
}
