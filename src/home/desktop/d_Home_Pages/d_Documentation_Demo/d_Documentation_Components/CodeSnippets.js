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
        code: {
          curl: [
            '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">curl</span> https://api.workos.com/directories \\',
            '<span style="color: #8b8d98;">&gt</span>     --header <span style="color: #143465;">"Authorization: Bearer</span> <span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789"</span>',
          ],
          javascript: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> { <span style="color: #5854c6;">WorkOS</span> } <span style="color: #148a68;">from</span>  <span style="color: #143465;">\'@workos-inc/node\'</span>;',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">const</span> workos <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>(\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789"</span>\');',
          ],
          ruby: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">require</span> "workos"',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS.configure do <span style="color: #ce3559;">|</span>config<span style="color: #ce3559;">|</span>',
            '<span style="color: #8b8d98;">4</span> \tconfig.key <span style="color: #ce3559;">=</span> "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>"',
            '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">end</span>',
          ],
          python: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> workos',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> workos.api_key <span style="color: #ce3559;">=</span> "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>"'
          ],
          go : [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">package</span> main',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">import</span> (',
            '<span style="color: #8b8d98;">4</span> \t  <span style="color: #143465;">"github.com/workos/workos-go/v3/pkg/audittrail"</span>',
            '<span style="color: #8b8d98;">5</span> \t  <span style="color: #143465;">"github.com/workos/workos-go/v3/pkg/directorysync"</span>',
            '<span style="color: #8b8d98;">6</span> \t  <span style="color: #143465;">"github.com/workos/workos-go/v3/pkg/organizations"</span>',
            '<span style="color: #8b8d98;">7</span> \t  <span style="color: #143465;">"github.com/workos/workos-go/v3/pkg/passwordless"</span>',
            '<span style="color: #8b8d98;">8</span> \t  <span style="color: #143465;">"github.com/workos/workos-go/v3/pkg/portal"</span>',
            '<span style="color: #8b8d98;">9</span> \t  <span style="color: #143465;">"github.com/workos/workos-go/v3/pkg/sso"</span>',
            '<span style="color: #8b8d98;">10</span> )',
            '<span style="color: #8b8d98;">11</span> ',
            '<span style="color: #8b8d98;">12</span> <span style="color: #148a68;">func</span> <span style="color: #5854c6;">main</span>() {',
            '<span style="color: #8b8d98;">13</span> \t  sso.<span style="color: #5854c6;">Configure</span>(',
            '<span style="color: #8b8d98;">14</span> \t\t  "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>",',
            '<span style="color: #8b8d98;">15</span> \t\t  "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>",',
            '<span style="color: #8b8d98;">16</span> \t\t  <span style="color: #143465;">"https://foo-corp.com/redirect-uri"</span>,',
            '<span style="color: #8b8d98;">17</span> \t  )',
            '<span style="color: #8b8d98;">18</span> ',
            '<span style="color: #8b8d98;">19</span> \t  organizations.<span style="color: #5854c6;">SetAPIKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>")',
            '<span style="color: #8b8d98;">20</span> ',
            '<span style="color: #8b8d98;">21</span> \t  passwordless.<span style="color: #5854c6;">SetAPIKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>")',
            '<span style="color: #8b8d98;">22</span> ',
            '<span style="color: #8b8d98;">23</span> \t  directorysync.<span style="color: #5854c6;">SetAPIKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>")',
            '<span style="color: #8b8d98;">24</span> ',
            '<span style="color: #8b8d98;">25</span> \t  audittrail.<span style="color: #5854c6;">SetAPIKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>")',
            '<span style="color: #8b8d98;">26</span> ',
            '<span style="color: #8b8d98;">27</span> \t  portal.<span style="color: #5854c6;">SetAPIKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>")',
            '<span style="color: #8b8d98;">28</span> }',
          ],
          php : [
            '<span style="color: #8b8d98;">1</span> <span style="color: #8b8d98;">&lt?php</span>',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS\\WorkOS::<span style="color: #5854c6;">setApiKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");'
          ],
          laravel : [
            '<span style="color: #8b8d98;">1</span> <span style="color: #8b8d98;">&lt?php</span>',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS\\WorkOS::<span style="color: #5854c6;">setApiKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");'
          ],
          java : [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">WorkOS</span>;',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #5854c6;">WorkOS</span> work_os <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");'
          ],
          dotnet : [
            '<span style="color: #8b8d98;">1</span> WorkOS.<span style="color: #5854c6;">SetApiKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");'
          ]
          // Add more languages and their respective lines of code
        },
    },
      // Add more code snippets as needed
]

export default codeSnippets;