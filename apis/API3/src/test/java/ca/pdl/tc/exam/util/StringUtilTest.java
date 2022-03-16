package ca.pdl.tc.exam.util;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class StringUtilTest {

    @Test
    public void testToCamelCase_MixCaps(){
        assertEquals("thisIsASentenceMixCaps",
                StringUtil.toCamelCase("this_Is_a_Sentence_mix_Caps"));
    }
    @Test
    public void testToCamelCase_AllCaps(){
        assertEquals("systemTypeEtxt",
                StringUtil.toCamelCase("SYSTEM_TYPE_ETXT"));
    }

}
