-   #### ssh



-   #### maven

    ```
    apt install maven
    mkdir ~/.m2/
    cat>~/.m2/settings.xml<<EOF
    <?xml version="1.0" encoding="UTF-8"?>
    <settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
    <localRepository>/mnt/r/Files/MavenRepository/repository/</localRepository>
    <mirrors>
    <mirror>
    <id>aliyun</id>
    <mirrorOf>central</mirrorOf>
    <name>aliyun</name>
    <url>https://maven.aliyun.com/repository/central</url>
    </mirror>
    </mirrors>
    </settings>
    EOF
    ```
