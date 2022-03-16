package ca.pdl.tc.exam.provider.vrdrest.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class RecallAttrValue {

    @JsonProperty("Type")
    private String type;

    @JsonProperty("Literal")
    private String literal;
}
