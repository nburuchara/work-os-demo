const codeSnippets = [
    { //* Install the WorkOS SDK 
      id: 0,
        title: "Install the WorkOS SDK",
        doubleHeaders: {
          javascript: [
            {lang1: "npm", lang2: "Yarn"},
          ],
          yarn: [
            {lang1: "npm", lang2: "Yarn"},
          ],
          ruby : [
            {lang1: "Terminal", lang2: "Bundler"}
          ],
          bundler: [
            {lang1: "Terminal", lang2: "Bundler"}
          ],
          java : [
            {lang1: "Maven", lang2: "Gradle"}
          ],
          gradle: [
            {lang1: "Maven", lang2: "Gradle"}
          ]
        },
        code: {
          javascript: [
            '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">npm install</span> @workos-inc/node'
          ],
          yarn: [
            '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">yarn add</span> @workos-inc/node'
          ],
          ruby: [
            '<span style="color: #8b8d98;">$</span> gem <span style="color: #5854c6;">install</span> workos'
          ],
          bundler: [
            '1 gem "workos"'
          ],
          python: [
            '<span style="color: #8b8d98;">$</span> pip <span style="color: #5854c6;">install</span> workos'
          ],
          go: [
            '<span style="color: #8b8d98;">$</span> go get -u github.com/workos/workos-go/...'
          ],
          php: [
            '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">composer</span> require workos/workos-php'
          ],
          laravel: [
            '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">composer</span> require workos/workos-php-laravel'
          ],
          java: [
            '<span style="color: #8b8d98;">1</span> <<span style="color: #0072dd;">dependency</span>>',
            '<span style="color: #8b8d98;">2</span>     &lt<span style="color: #0072dd;">groupId</span>&gtcom.workos&lt/<span style="color: #0072dd;">groupId</span>>',
            '<span style="color: #8b8d98;">3</span>     &lt<span style="color: #0072dd;">artifactId</span>&gtworkos&lt/<span style="color: #0072dd;">artifactId</span>>',
            '<span style="color: #8b8d98;">4</span>     &lt<span style="color: #0072dd;">version</span>&gt{version}&lt/<span style="color: #0072dd;">version</span>>',
            '<span style="color: #8b8d98;">5</span> &lt/<span style="color: #0072dd;">dependency</span>>'
          ],
          gradle: [
            '1 dependencies {',
            '2     implementation \'com.workos:workos:VERSION\'',
            '3 }'
          ],
          dotnet: [
            '<span style="color: #8b8d98;">$</span> nuget <span style="color: #5854c6;">install</span> WorkOS.net'
          ]
        }
    },
    { //* Set API Key
        id: 1,
        title: "Set API Key",
        doubleHeaders: {
          javascript: [
            {lang1: "NPM", lang2: "Yarn"},
          ],
          ruby : [
            {lang1: "Terminal", lang2: "Bundler"}
          ],
          java : [
            {lang1: "Maven", lang2: "Gradle"}
          ]
        },
        code: {
          curl: [
            '$ curl https://api.workos.com/directories \\',
            '>     --header "Authorization: Bearer sk_example_123456789"',
          ],
          javascript: [
            '1 import { WorkOS } from \'@workos-inc/node\';',
            '2 ',
            '3 const workos = new WorkOS(\'sk_example_123456789\');',
          ],
          ruby: [
            '1 require "workos"',
            '2 ',
            '3 WorkOS.configure do |config|',
            '4 \tconfig.key = "sk_example_123456789"',
            '5 end',
          ],
          python: [
            '1 import workos',
            '2 ',
            '3 workos.api_key = "sk_example_123456789"'
          ],
          go : [
            '1 package main',
            '2 ',
            '3 import (',
            '4 \t  "github.com/workos/workos-go/v3/pkg/audittrail"',
            '5 \t  "github.com/workos/workos-go/v3/pkg/directorysync"',
            '6 \t  "github.com/workos/workos-go/v3/pkg/organizations"',
            '7 \t  "github.com/workos/workos-go/v3/pkg/passwordless"',
            '8 \t  "github.com/workos/workos-go/v3/pkg/portal"',
            '9 \t  "github.com/workos/workos-go/v3/pkg/sso"',
            '10 )',
            '11 ',
            '12 func main() {',
            '13 \t  sso.Configure(',
            '14 \t\t  "sk_example_123456789",',
            '15 \t\t  "client_123456789",',
            '16 \t\t  "https://foo-corp.com/redirect-uri",',
            '17 \t  )',
            '18 ',
            '19 \t  organizations.SetAPIKey("sk_example_123456789")',
            '20 ',
            '21 \t  passwordless.SetAPIKey("sk_example_123456789")',
            '22 ',
            '23 \t  directorysync.SetAPIKey("sk_example_123456789")',
            '24 ',
            '25 \t  audittrail.SetAPIKey("sk_example_123456789")',
            '26 ',
            '27 \t  portal.SetAPIKey("sk_example_123456789")',
            '28 }',
          ],
          php : [
            '1 <?php',
            '2 ',
            '3 WorkOS\\WorkOS::setApiKey("sk_example_123456789");'
          ],
          laravel : [
            '1 <?php',
            '2 ',
            '3 WorkOS\\WorkOS::setApiKey("sk_example_123456789");'
          ],
          java : [
            '1 import com.workos.WorkOS;',
            '2 ',
            '3 WorkOS work_os = new WorkOS("sk_example_123456789");'
          ],
          dotnet : [
            '1 WorkOS.SetApiKey("sk_example_123456789");'
          ]
          // Add more languages and their respective lines of code
        },
    },
      // Add more code snippets as needed
]

export default codeSnippets;