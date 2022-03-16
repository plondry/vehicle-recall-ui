package ca.pdl.tc.exam.provider.vrdrest.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class RecallSummary {

    private List<RecallAttribute> attributeList;
}
