package ca.pdl.tc.exam.util;

import org.apache.commons.text.CaseUtils;

public class StringUtil {

    public static String toCamelCase(String str) {

        return CaseUtils.toCamelCase(str, false, '_');

    }
}
