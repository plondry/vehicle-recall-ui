package ca.pdl.tc.exam;

import ca.pdl.tc.exam.rest.PostVehicleRecallsTest;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

public class FileUtil {

    public static String getContentAsString(String fileName) {
        ClassLoader classLoader = PostVehicleRecallsTest.class.getClassLoader();
        InputStream is = classLoader.getResourceAsStream(fileName);
        if (is != null) {
            BufferedReader reader = new BufferedReader(new InputStreamReader(is));
            return reader.lines().collect(Collectors.joining(System.lineSeparator()));
        } else {
            throw new RuntimeException("file not found");
        }
    }
}
