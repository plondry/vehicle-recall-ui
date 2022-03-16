package ca.pdl.tc.exam.provider.vrdrest.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class RecallAttribute {

    @JsonProperty("Name")
    private String name;

    @JsonProperty("Value")
    private RecallAttrValue literal;

}
