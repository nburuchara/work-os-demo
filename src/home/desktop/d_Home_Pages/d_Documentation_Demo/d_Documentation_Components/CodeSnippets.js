const codeSnippets = [

      //! - - API REFERENCE - - !//
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

    { //* Pagination
        id: 2,
        title: "Pagination",
        doubleHeaders: {
          javascript: [
            {lang1: "Request", lang2: "Response"},
          ],
          curl: [
            {lang1: "Request", lang2: "Response"},
          ],
          ruby: [
            {lang1: "Request", lang2: "Response"},
          ],
          python: [
            {lang1: "Request", lang2: "Response"},
          ],
          go: [
            {lang1: "Request", lang2: "Response"},
          ],
          php: [
            {lang1: "Request", lang2: "Response"},
          ],
          laravel: [
            {lang1: "Request", lang2: "Response"},
          ],
          java: [
            {lang1: "Request", lang2: "Response"},
          ],
          dotnet: [
            {lang1: "Request", lang2: "Response"},
          ],
          json: [
            {lang1: "Request", lang2: "Response"},
          ]
        },
        code: {
          curl: [
            '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">curl</span> https://api.workos.com/connections?limit<span style="color: #ce3559;">=</span><span style="color: #0072dd;">100</span> \\',
            '<span style="color: #8b8d98;">&gt</span>     --header <span style="color: #143465;">"Authorization: Bearer</span> <span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789"</span>'
          ],
          javascript: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> { <span style="color: #5854c6;">WorkOS</span> } <span style="color: #148a68;">from</span>  <span style="color: #143465;">\'@workos-inc/node\'</span>;',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">const</span> workos <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>(\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789"</span>\');',
            '<span style="color: #8b8d98;">4</span> ',
            '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">let</span> list <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>({ limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'desc\'</span> });',
            '<span style="color: #8b8d98;">6</span> <span style="color: #148a68;">let</span> connections <span style="color: #ce3559;">=</span> list.data;',
            '<span style="color: #8b8d98;">7</span> <span style="color: #148a68;">let</span> after <span style="color: #ce3559;">=</span> list.listMetadata.after;',
            '<span style="color: #8b8d98;">8</span> ',
            '<span style="color: #8b8d98;">9</span> <span style="color: #148a68;">while</span> (after) {',
            '<span style="color: #8b8d98;">10</span>     list <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>({',
            '<span style="color: #8b8d98;">11</span>         limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>,',
            '<span style="color: #8b8d98;">12</span>         after<span style="color: #ce3559;">:</span> after,',
            '<span style="color: #8b8d98;">13</span>         order<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'desc\'</span>,',
            '<span style="color: #8b8d98;">14</span>      )};',
            '<span style="color: #8b8d98;">15</span>      connections <span style="color: #ce3559;">=</span> connections.<span style="color: #5854c6;">concat</span>(list.data);',
            '<span style="color: #8b8d98;">16</span>      after <span style="color: #ce3559;">=</span> list.listMetadata.after;',
            '<span style="color: #8b8d98;">17</span> };',
          ],
          ruby: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">require</span> "workos"',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS.configure <span style="color: #148a68;">do</span> <span style="color: #ce3559;">|</span>config<span style="color: #ce3559;">|</span>',
            '<span style="color: #8b8d98;">4</span>     config.key <span style="color: #ce3559;">=</span> "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>"',
            '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">end</span>',
            '<span style="color: #8b8d98;">6</span> ',
            '<span style="color: #8b8d98;">7</span> <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list</span> <span style="color: #ce3559;">=</span> WorkOS::<span style="color: #0072dd;">SSO</span>.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_connections</span>(limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">:</span> <span style="color: #143465;">"desc"</span>)',
            '<span style="color: #8b8d98;">8</span> connections <span style="color: #ce3559;">=</span> connections.data',
            '<span style="color: #8b8d98;">9</span> after <span style="color: #ce3559;">=</span> connections.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_metadata</span>[<span style="color: #143465;">"after"</span>]',
            '<span style="color: #8b8d98;">10</span> ',
            '<span style="color: #8b8d98;">11</span> <span style="color: #148a68;">until</span> after.<span style="color: #148a68;">nil</span><span style="color: #ce3559;">?</span>',
            '<span style="color: #8b8d98;">12</span>     <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">current_page</span> <span style="color: #ce3559;">=</span> WorkOS::SSO.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_connections</span>(after<span style="color: #ce3559;">:</span> after, limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">:</span> <span style="color: #143465;">"desc"</span>)',
            '<span style="color: #8b8d98;">13</span>     connections <span style="color: #ce3559;">=</span> connections.concat(current_page.data)',
            '<span style="color: #8b8d98;">14</span>     after <span style="color: #ce3559;">=</span> current_page.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_metadata</span>[<span style="color: #143465;">"after"</span>]',
            '<span style="color: #8b8d98;">15</span> <span style="color: #148a68;">end</span>',
          ],
          python: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> workos',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">response</span> <span style="color: #ce3559;">=</span> workos.client.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_connections</span>(limit<span style="color: #ce3559;">=</span><span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">=</span><span style="color: #143465;">"desc"</span>)',
            '<span style="color: #8b8d98;">4</span> connections <span style="color: #ce3559;">=</span> response[<span style="color: #143465;">"data"</span>]',
            '<span style="color: #8b8d98;">5</span> after <span style="color: #ce3559;">=</span> response[<span style="color: #143465;">"listMetadata"</span>][<span style="color: #143465;">"after"</span>]',
            '<span style="color: #8b8d98;">6</span> ',
            '<span style="color: #8b8d98;">7</span> <span style="color: #148a68;">while</span> after <span style="color: #148a68;">is not</span> <span style="color: #0072dd;">None</span>:',
            '<span style="color: #8b8d98;">8</span>    <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">response</span> <span style="color: #ce3559;">=</span> workos.client.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_connections</span>(limit<span style="color: #ce3559;">=</span><span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">=</span><span style="color: #143465;">"desc"</span>, after<span style="color: #ce3559;">=</span>after)',
            '<span style="color: #8b8d98;">9</span>    <span style="color: #148a68;">for</span> i <span style="color: #148a68;">in</span> response[<span style="color: #143465;">"data"</span>]:',
            '<span style="color: #8b8d98;">10</span>       connections.append(i)',
            '<span style="color: #8b8d98;">11</span>   after <span style="color: #ce3559;">=</span> response[<span style="color: #143465;">"listMetadata"</span>][<span style="color: #143465;">"after"</span>]'
          ],
          go: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">package</span> main',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">import</span> (',
            '<span style="color: #8b8d98;">4</span> \t  <span style="color: #143465;">"context"</span>',
            '<span style="color: #8b8d98;">5</span> ',
            '<span style="color: #8b8d98;">6</span> \t  <span style="color: #143465;">"github.com/workos/workos-go/v3/pkg/sso"</span>',
            '<span style="color: #8b8d98;">7</span> )',
            '<span style="color: #8b8d98;">8</span> ',
            '<span style="color: #8b8d98;">9</span> <span style="color: #148a68;">func</span> <span style="color: #5854c6;">main</span>() {',
            '<span style="color: #8b8d98;">10</span> \t  sso.<span style="color: #5854c6;">Configure</span>(',
            '<span style="color: #8b8d98;">11</span> \t\t  "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>",',
            '<span style="color: #8b8d98;">12</span> \t\t  "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789"</span>",',
            '<span style="color: #8b8d98;">13</span> \t  )',
            '<span style="color: #8b8d98;">14</span> ',
            '<span style="color: #8b8d98;">15</span> \t  <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list</span>, err <span style="color: #ce3559;">:=</span> sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListConnections</span>(',
            '<span style="color: #8b8d98;">16</span> \t\t  context.<span style="color: #5854c6;">Background</span>(),',
            '<span style="color: #8b8d98;">17</span> \t\t  sso.ListConnectionsOpts{Limit: <span style="color: #0072dd;">100</span>, Order: <span style="color: #143465;">"desc"</span>},',
            '<span style="color: #8b8d98;">18</span> \t  )',
            '<span style="color: #8b8d98;">19</span> ',
            '<span style="color: #8b8d98;">20</span> \t  connections <span style="color: #ce3559;">:=</span> list.Data',
            '<span style="color: #8b8d98;">21</span> \t  after <span style="color: #ce3559;">:=</span> list.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListMetadata</span>.After',
            '<span style="color: #8b8d98;">22</span> ',
            '<span style="color: #8b8d98;">23</span> \t  <span style="color: #148a68;">for</span> len(before) > <span style="color: #0072dd;">0</span> {',
            '<span style="color: #8b8d98;">24</span> \t\t  <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">currentPage</span>, err <span style="color: #ce3559;">:=</span> sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListConnections</span>(',
            '<span style="color: #8b8d98;">25</span> \t\t\t  context.<span style="color: #5854c6;">Background</span>(),',
            '<span style="color: #8b8d98;">26</span> \t\t\t  sso.ListConnectionsOpts{Limit: <span style="color: #0072dd;">100</span>, Order: <span style="color: #143465;">"desc"</span>, After: after},',
            '<span style="color: #8b8d98;">27</span> \t\t  )',
            '<span style="color: #8b8d98;">28</span> ',
            '<span style="color: #8b8d98;">29</span> \t\t  <span style="color: #148a68;">if</span> err <span style="color: #ce3559;">!=</span> <span style="color: #0072dd;">nil</span> {',
            '<span style="color: #8b8d98;">30</span> \t\t\t  <span style="color: #8b8d98;">// Handle the error...</span>',
            '<span style="color: #8b8d98;">31</span> \t\t\t  <span style="color: #148a68;">return</span>',
            '<span style="color: #8b8d98;">32</span> \t\t  }',
            '<span style="color: #8b8d98;">33</span> ',
            '<span style="color: #8b8d98;">34</span> \t\t  connections <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">append</span>(connections, currentPage.Data...)',
            '<span style="color: #8b8d98;">35</span> \t\t  after <span style="color: #ce3559;">=</span> currentPage.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListMetadata</span>.After',
            '<span style="color: #8b8d98;">36</span> \t  }',
            '<span style="color: #8b8d98;">37</span> }',
          ],
          php: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #8b8d98;">&lt?php</span>',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS\\WorkOS::<span style="color: #5854c6;">setApiKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");',
            '<span style="color: #8b8d98;">4</span> ',
            '<span style="color: #8b8d98;">5</span> $sso <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>\\<span style="color: #5854c6;">SSO</span>();',
            '<span style="color: #8b8d98;">6</span> ',
            '<span style="color: #8b8d98;">7</span> [$before, $after, $connections] <span style="color: #ce3559;">=</span> $sso<span style="color: #ce3559;">-></span><span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(',
            '<span style="color: #8b8d98;">8</span>     limit: <span style="color: #0072dd;">100</span>,',
            '<span style="color: #8b8d98;">9</span>     order: <span style="color: #143465;">"desc"</span>',
            '<span style="color: #8b8d98;">10</span> )',
            '<span style="color: #8b8d98;">11</span> ',
            '<span style="color: #8b8d98;">12</span> <span style="color: #148a68;">while</span> ($after) {',
            '<span style="color: #8b8d98;">3</span>     [$before, $after, $connections] <span style="color: #ce3559;">=</span> $sso<span style="color: #ce3559;">-></span><span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(',
            '<span style="color: #8b8d98;">14</span>         limit: <span style="color: #0072dd;">100</span>,',
            '<span style="color: #8b8d98;">15</span>         after: $after,',
            '<span style="color: #8b8d98;">16</span>         order: <span style="color: #143465;">"desc"</span>',
            '<span style="color: #8b8d98;">17</span>    );',
            '<span style="color: #8b8d98;">18</span> ',
            '<span style="color: #8b8d98;">19</span>    $connections <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">array_merge</span>($connections, $currentPage);',
            '<span style="color: #8b8d98;">20</span> }'
          ],
          laravel: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #8b8d98;">&lt?php</span>',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS\\WorkOS::<span style="color: #5854c6;">setApiKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");',
            '<span style="color: #8b8d98;">4</span> ',
            '<span style="color: #8b8d98;">5</span> $sso <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>\\<span style="color: #5854c6;">SSO</span>();',
            '<span style="color: #8b8d98;">6</span> ',
            '<span style="color: #8b8d98;">7</span> [$before, $after, $connections] <span style="color: #ce3559;">=</span> $sso<span style="color: #ce3559;">-></span><span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(',
            '<span style="color: #8b8d98;">8</span>     limit: <span style="color: #0072dd;">100</span>,',
            '<span style="color: #8b8d98;">9</span>     order: <span style="color: #143465;">"desc"</span>',
            '<span style="color: #8b8d98;">10</span> )',
            '<span style="color: #8b8d98;">11</span> ',
            '<span style="color: #8b8d98;">12</span> <span style="color: #148a68;">while</span> ($after) {',
            '<span style="color: #8b8d98;">3</span>     [$before, $after, $connections] <span style="color: #ce3559;">=</span> $sso<span style="color: #ce3559;">-></span><span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(',
            '<span style="color: #8b8d98;">14</span>         limit: <span style="color: #0072dd;">100</span>,',
            '<span style="color: #8b8d98;">15</span>         after: $after,',
            '<span style="color: #8b8d98;">16</span>         order: <span style="color: #143465;">"desc"</span>',
            '<span style="color: #8b8d98;">17</span>    );',
            '<span style="color: #8b8d98;">18</span> ',
            '<span style="color: #8b8d98;">19</span>    $connections <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">array_merge</span>($connections, $currentPage);',
            '<span style="color: #8b8d98;">20</span> }'
          ],
          java: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">WorkOS</span>;',
            '<span style="color: #8b8d98;">2</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">sso</span>.<span style="color: #5854c6;">SsoApi</span>.<span style="color: #5854c6;">ListConnectionsOptions</span>;',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">sso</span>.<span style="color: #5854c6;">models</span>.<span style="color: #5854c6;">ConnectionList</span>;',
            '<span style="color: #8b8d98;">4</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">java</span>.<span style="color: #5854c6;">util</span>.<span style="color: #5854c6;">list</span>;',
            '<span style="color: #8b8d98;">5</span> ',
            '<span style="color: #8b8d98;">6</span> <span style="color: #5854c6;">ListConnectionsOptions</span> options <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">ListConnectionsOptions</span>();',
            '<span style="color: #8b8d98;">7</span> options.<span style="color: #5854c6;">put</span>(<span style="color: #143465;">"limit"</span>, <span style="color: #143465;">"100"</span>);',
            '<span style="color: #8b8d98;">8</span> options.<span style="color: #5854c6;">put</span>(<span style="color: #143465;">"order"</span>, <span style="color: #143465;">"desc"</span>);',
            '<span style="color: #8b8d98;">9</span> ',
            '<span style="color: #8b8d98;">10</span> <span style="color: #5854c6;">ConnectionList</span> list <span style="color: #ce3559;">=</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(options);',
            '<span style="color: #8b8d98;">11</span> <span style="color: #5854c6;">String</span> after <span style="color: #ce3559;">=</span> list.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listMetadata</span>.after;',
            '<span style="color: #8b8d98;">12</span> <span style="color: #5854c6;">List</span> connections <span style="color: #ce3559;">=</span> list.data;',
            '<span style="color: #8b8d98;">13</span> ',
            '<span style="color: #8b8d98;">14</span> <span style="color: #148a68;">while</span> (after <span style="color: #ce3559;">!=</span> <span style="color: #148a68;">null</span>) {',
            '<span style="color: #8b8d98;">15</span>     options.<span style="color: #5854c6;">put</span>(<span style="color: #143465;">"after"</span>, <span style="color: #143465;">"after"</span>);',
            '<span style="color: #8b8d98;">16</span>     <span style="color: #5854c6;">ConnectionList</span> currentPage <span style="color: #ce3559;">=</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(options);',
            '<span style="color: #8b8d98;">17</span>     after <span style="color: #ce3559;">=</span> currentPage.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listMetadata</span>.after;',
            '<span style="color: #8b8d98;">18</span>     connections.add(currentPage.data);',
            '<span style="color: #8b8d98;">19</span> }'
          ],
          dotnet: [
            '<span style="color: #8b8d98;">1</span> WorkOS.<span style="color: #5854c6;">SetApiKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">var</span> ssoService <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">SSOService</span>();',
            '<span style="color: #8b8d98;">4</span> ',
            '<span style="color: #8b8d98;">5</span> <span style="color: #5854c6;">List</span><<span style="color: #148a68;">object</span>> connections <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">List</span><<span style="color: #148a68;">object</span>>();',
            '<span style="color: #8b8d98;">6</span> <span style="color: #148a68;">var</span> <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list</span> <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> ssoService.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListConnections</span>(Limit <span style="color: #ce3559;">=</span> <span style="color: #0072dd;">100</span>, Order <span style="color: #ce3559;">=</span> \'desc\');',
            '<span style="color: #8b8d98;">7</span> ',
            '<span style="color: #8b8d98;">8</span> <span style="color: #148a68;">foreach</span> (<span style="color: #148a68;">object</span> i <span style="color: #148a68;">in</span> list.Data)',
            '<span style="color: #8b8d98;">9</span> {',
            '<span style="color: #8b8d98;">10</span>     connections.<span style="color: #5854c6;">Add</span>(i);',
            '<span style="color: #8b8d98;">11</span> };',
            '<span style="color: #8b8d98;">12</span> <span style="color: #148a68;">var</span> after <span style="color: #ce3559;">=</span> list.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListMetadata</span>.After;',
            '<span style="color: #8b8d98;">13</span> ',
            '<span style="color: #8b8d98;">14</span> <span style="color: #5854c6;">While</span>(after);',
            '<span style="color: #8b8d98;">15</span> {',
            '<span style="color: #8b8d98;">16</span>     list <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> ssoService.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListConnections</span>(After <span style="color: #ce3559;">=</span> after, Limit <span style="color: #ce3559;">=</span> <span style="color: #0072dd;">100</span>, Order <span style="color: #ce3559;">=</span> \'desc\');',
            '<span style="color: #8b8d98;">17</span>     <span style="color: #148a68;">foreach</span> (<span style="color: #148a68;">object</span> i <span style="color: #148a68;">in</span> list.Data)',
            '<span style="color: #8b8d98;">18</span>     {',
            '<span style="color: #8b8d98;">19</span>         connections.<span style="color: #5854c6;">Add</span>(i);',
            '<span style="color: #8b8d98;">20</span>     };',
            '<span style="color: #8b8d98;">21</span>     after <span style="color: #ce3559;">=</span> list.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListMetadata</span>.After;',
            '<span style="color: #8b8d98;">22</span> };'
          ],
          json: [
            '<span style="color: #8b8d98;">1</span> {',
            '<span style="color: #8b8d98;">2</span>   <span style="color: #0072dd;">"data"</span><span style="color: #ce3559;">:</span> [',
            '<span style="color: #8b8d98;">3</span>     {',
            '<span style="color: #8b8d98;">4</span>       <span style="color: #0072dd;">"object"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"connection"</span>,',
            '<span style="color: #8b8d98;">5</span>       <span style="color: #0072dd;">"id"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"conn_01E4ZCR3C56J083X43JQXF3JK5"</span>,',
            '<span style="color: #8b8d98;">6</span>       <span style="color: #0072dd;">"organization_id"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"org_01EHWNCE74X7JSDV0X3SZ3KJNY"</span>,',
            '<span style="color: #8b8d98;">7</span>       <span style="color: #0072dd;">"connection_type"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"GoogleOAuth"</span>,',
            '<span style="color: #8b8d98;">8</span>       <span style="color: #0072dd;">"name"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"Foo Corp"</span>,',
            '<span style="color: #8b8d98;">9</span>       <span style="color: #0072dd;">"state"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"active"</span>,',
            '<span style="color: #8b8d98;">10</span>      <span style="color: #0072dd;">"created_at"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"2021-06-25T19:07:33.155Z"</span>,',
            '<span style="color: #8b8d98;">11</span>      <span style="color: #0072dd;">"updated_at"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"2021-06-25T19:08:33.155Z"</span>',
            '<span style="color: #8b8d98;">12</span>    },',
            '<span style="color: #8b8d98;">13</span>    {',
            '<span style="color: #8b8d98;">14</span>      <span style="color: #0072dd;">"object"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"connection"</span>,',
            '<span style="color: #8b8d98;">15</span>      <span style="color: #0072dd;">"id"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"conn_01E2NPPCT7XQ2MVVYDHWGK1WN4"</span>,',
            '<span style="color: #8b8d98;">16</span>      <span style="color: #0072dd;">"organization_id"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"org_01EHWNCE74X7JSDV0X3SZ3KJNY"</span>,',
            '<span style="color: #8b8d98;">17</span>      <span style="color: #0072dd;">"connection_type"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"OktaSAML"</span>,',
            '<span style="color: #8b8d98;">18</span>      <span style="color: #0072dd;">"name"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"Example Co"</span>,',
            '<span style="color: #8b8d98;">19</span>      <span style="color: #0072dd;">"state"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"active"</span>,',
            '<span style="color: #8b8d98;">20</span>      <span style="color: #0072dd;">"created_at"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"2021-06-25T19:09:33.155Z"</span>,',
            '<span style="color: #8b8d98;">21</span>      <span style="color: #0072dd;">"updated_at"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"2021-06-25T19:10:33.155Z"</span>',
            '<span style="color: #8b8d98;">22</span>    },',
            '<span style="color: #8b8d98;">23</span>  ],',
            '<span style="color: #8b8d98;">24</span>  <span style="color: #0072dd;">"list_metadata"</span><span style="color: #ce3559;">:</span> {',
            '<span style="color: #8b8d98;">25</span>    <span style="color: #0072dd;">"before"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"conn_01E2NPPCT7XQ2MVVYDHWGK1WN4"</span>,',
            '<span style="color: #8b8d98;">26</span>    <span style="color: #0072dd;">"after"</span><span style="color: #ce3559;">:</span> <span style="color: #148a68;">null</span>',
            '<span style="color: #8b8d98;">27</span>   }',
            '<span style="color: #8b8d98;">28</span> }',
          ]
        },
        apiEpxlainers: {
          listConnections_javascript: [
            'sso.<span style="color: #5854c6;">listConnections</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
            '    connectionType<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
            '    domain<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
            '    organizationId<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
            '    after<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
            '    before<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
            '    limit<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">number</span>;',
            '    order<span style="color: #ce3559;">?:</span> <span style="color: #143465;">"asc"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"desc"</span>;',
            '}) <span style="color: #ce3559;">=&gt</span> {',
            '    data<span style="color: #ce3559;">:</span> <span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">[]</span>;',
            '    listMetadata<span style="color: #ce3559;">:</span> <span style="color: #148a68;">object</span>;',
            '}',
          ],
          list_ruby: [
            'list<span style="color: #ce3559;">:</span> {',
            '    data<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Array</span><span style="color: #ce3559;">[</span><span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">]</span>,',
            '    list_metadata<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Hash</span>',
            '}'
          ],
          list_connections_ruby: [
            'SSO.<span style="color: #5854c6;">list_connections</span>(',
            '    <span style="color: #ce3559;">?</span>connection_type<span style="color: #ce3559;">:</span> String,',
            '    <span style="color: #ce3559;">?</span>domain<span style="color: #ce3559;">:</span> <span style="color: #148a68;">String</span>,',
            '    <span style="color: #ce3559;">?</span>organization_id<span style="color: #ce3559;">:</span> <span style="color: #148a68;">String</span>,',
            '    <span style="color: #ce3559;">?</span>after<span style="color: #ce3559;">:</span> <span style="color: #148a68;">String</span>,',
            '    <span style="color: #ce3559;">?</span>before<span style="color: #ce3559;">:</span> <span style="color: #148a68;">String</span>,',
            '    <span style="color: #ce3559;">?</span>limit<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Integer</span>,',
            '    <span style="color: #ce3559;">?</span>order<span style="color: #ce3559;">:</span> <span style="color: #143465;">"asc"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"desc"</span>',
            ') <span style="color: #ce3559;">-&gt</span> {',
            '    data<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Array</span><span style="color: #ce3559;">[</span><span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">]</span>,',
            '    list_metadata<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Hash</span>',
            '}'
          ],
          list_metadata_ruby: [
            '(',
            '    <span style="color: #ce3559;">?</span>before<span style="color: #ce3559;">:</span> <span style="color: #148a68;">String</span>,',
            '    <span style="color: #ce3559;">?</span>after<span style="color: #ce3559;">:</span> <span style="color: #148a68;">String</span>,',
            '    <span style="color: #ce3559;">?</span>limit<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Integer</span>,',
            '    <span style="color: #ce3559;">?</span>order<span style="color: #ce3559;">:</span> <span style="color: #143465;">"asc"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"desc"</span>',
            ') <span style="color: #ce3559;">-&gt</span> void'
          ],
          current_page_ruby: [
            'current_page<span style="color: #ce3559;">:</span> {',
            '    data<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Array</span><span style="color: #ce3559;">[</span><span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">]</span>,',
            '    list_metadata<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Hash</span>',
            '}'
          ],
          response_python: [
            'response<span style="color: #ce3559;">:</span> {',
            '    "data"<span style="color: #ce3559;">:</span> <span style="color: #148a68;">list</span><span style="color: #ce3559;">[</span><span style="color: #148a68;">dict</span><span style="color: #ce3559;">]</span>,',
            '    "list_metadata"<span style="color: #ce3559;">:</span> <span style="color: #148a68;">dict</span>',
            '}'
          ],
          list_connections_python: [
            'sso.<span style="color: #5854c6;">list_connections</span><span style="color: #ce3559;">:</span> (',
            '    connection_type<span style="color: #ce3559;">:</span> <span style="color: #148a68;">str</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">None</span>',
            '    domain<span style="color: #ce3559;">:</span> <span style="color: #148a68;">str</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">None</span>,',
            '    organization_id<span style="color: #ce3559;">:</span> <span style="color: #148a68;">str</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">None</span>,',
            '    after<span style="color: #ce3559;">:</span> <span style="color: #148a68;">str</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">None</span>,',
            '    before<span style="color: #ce3559;">:</span> <span style="color: #148a68;">str</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">None</span>,',
            '    limit<span style="color: #ce3559;">:</span> <span style="color: #148a68;">int</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">None</span>,',
            '    order<span style="color: #ce3559;">:</span> <span style="color: #5854c6;">Order.Asc</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">Order.Desc</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">None</span>',
            ') <span style="color: #ce3559;">-></span> {',
            '    "data"<span style="color: #ce3559;">:</span> <span style="color: #148a68;">list</span><span style="color: #ce3559;">[</span><span style="color: #148a68;">dict</span><span style="color: #ce3559;">]</span>,',
            '    "list_metadata"<span style="color: #ce3559;">:</span> <span style="color: #148a68;">dict</span>',
            '}'
          ],
          list_go: [
            'list  <span style="color: #148a68;">sso</span>.<span style="color: #148a68;">ListConnectionsResponse</span>{',
            '\t  Data <span style="color: #ce3559;">[]</span><span style="color: #148a68;">sso</span>.<span style="color: #148a68;">Connection</span>',
            '\t  ListMetadata <span style="color: #148a68;">common</span>.<span style="color: #148a68;">ListMetadata</span>',
            '}'
          ],
          ListConnections_go: [
            'sso.<span style="color: #5854c6;">ListConnections</span>(',
            '\t  ctx <span style="color: #148a68;">context</span>.<span style="color: #148a68;">Context</span>,',
            '\t  opts <span style="color: #148a68;">sso</span>.<span style="color: #148a68;">ListConnectionsOpts</span>{',
            '\t\t  ConnectionType<span style="color: #ce3559;">?</span> <span style="color: #148a68;">string</span>',
            '\t\t  Domain<span style="color: #ce3559;">?</span> <span style="color: #148a68;">string</span>',
            '\t\t  OrganizationID<span style="color: #ce3559;">?</span> <span style="color: #148a68;">string</span>',
            '\t\t  Limit<span style="color: #ce3559;">?</span> <span style="color: #148a68;">int</span>',
            '\t\t  Before<span style="color: #ce3559;">?</span> <span style="color: #148a68;">string</span>',
            '\t\t  After<span style="color: #ce3559;">?</span> <span style="color: #148a68;">string</span>',
            '\t\t  Order<span style="color: #ce3559;">?</span> <span style="color: #148a68;">common</span<.<span style="color: #148a68;">Order</span>',
            '\t  }',
            ') (<span style="color: #148a68;">sso</span>.<span style="color: #148a68;">ListConnectionsResponse</span>, <span style="color: #148a68;">error</span>)',
          ],
          ListMetadata_go: [
            '(',
            '\t  Before<span style="color: #ce3559;">?</span> <span style="color: #148a68;">string</span>',
            '\t  After<span style="color: #ce3559;">?</span> <span style="color: #148a68;">string</span>',
            '\t  Limit<span style="color: #ce3559;">?</span> <span style="color: #148a68;">int</span>',
            '\t  Order<span style="color: #ce3559;">?</span> <span style="color: #148a68;">common</span<.<span style="color: #148a68;">Order</span>',
            ')'
          ],
          currentPage_go: [
            'currentPage <span style="color: #148a68;">sso</span>.<span style="color: #148a68;">ListConnectionsResponse</span>{',
            '\t  Data <span style="color: #ce3559;">[]</span><span style="color: #148a68;">sso</span>.<span style="color: #148a68;">Connection</span>',
            '\t  ListMetadata <span style="color: #148a68;">common</span>.<span style="color: #148a68;">ListMetadata</span>',
            '}'
          ],
          listConnections_php: [
            '$sso<span style="color: #ce3559;">-></span><span style="color: #5854c6;">listConnections</span>(',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $connectionType,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $domain,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $organizationId,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">int</span> $limit,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $before,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $after,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $order "asc"<span style="color: #ce3559;">|</span>"desc"',
            ')<span style="color: #ce3559;">:</span> array <span style="color: #ce3559;">[</span>',
            '    <span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">[]</span> $data,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $before,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $after',
            '<span style="color: #ce3559;">]</span>'
          ],
          listConnections_laravel: [
            '$sso<span style="color: #ce3559;">-></span><span style="color: #5854c6;">listConnections</span>(',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $connectionType,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $domain,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $organizationId,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">int</span> $limit,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $before,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $after,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $order "asc"<span style="color: #ce3559;">|</span>"desc"',
            ')<span style="color: #ce3559;">:</span> array <span style="color: #ce3559;">[</span>',
            '    <span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">[]</span> $data,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $before,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $after',
            '<span style="color: #ce3559;">]</span>'
          ],
          listConnections_java: [
            '<span style="color: #5854c6;">ConnectionList</span> sso.<span style="color: #5854c6;">listConnections</span>(<span style="color: #5854c6;">ListConnectionsOptions</span> options {',
            '    <span style="color: #148a68;">String</span><span style="color: #ce3559;">?</span> connectionType',
            '    <span style="color: #148a68;">String</span><span style="color: #ce3559;">?</span> domain',
            '    <span style="color: #148a68;">String</span><span style="color: #ce3559;">?</span> organizationId',
            '    <span style="color: #148a68;">Int</span><span style="color: #ce3559;">?</span> limit',
            '    <span style="color: #148a68;">String</span><span style="color: #ce3559;">?</span> before',
            '    <span style="color: #148a68;">String</span><span style="color: #ce3559;">?</span> after',
            '    <span style="color: #5854c6;">Order</span><span style="color: #ce3559;">?</span> order',
            '    <span style="color: #5854c6;">ListConnectionsOptionsBuilder</span> builder()',
            '})'
          ],
          listMetadata_java: [
            '<span style="color: #ce3559;">void</span> (',
            '    <span style="color: #148a68;">String</span><span style="color: #ce3559;">?</span> before,',
            '    <span style="color: #148a68;">String</span><span style="color: #ce3559;">?</span> after,',
            '    <span style="color: #148a68;">Int</span><span style="color: #ce3559;">?</span> limit,',
            '    <span style="color: #148a68;">Order</span><span style="color: #ce3559;">?</span> order',
            ')'
          ],
          ListConnections_dotnet: [
            '<span style="color: #5854c6;">Task</span><span style="color: #ce3559;"><</span><span style="color: #5854c6;">WorkOSList</span><span style="color: #ce3559;"><</span><span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">>></span> ssoService.<span style="color: #5854c6;">ListConnections</span>(',
            '    <span style="color: #5854c6;">ListConnectionsOptions</span> options {',
            '        <span style="color: #148a68;">string</span><span style="color: #ce3559;">?</span> Type;',
            '        <span style="color: #148a68;">string</span><span style="color: #ce3559;">?</span> Domain;',
            '        <span style="color: #148a68;">string</span><span style="color: #ce3559;">?</span> OrganizationId;',
            '        <span style="color: #148a68;">int</span><span style="color: #ce3559;">?</span> Limit;',
            '        <span style="color: #148a68;">string</span><span style="color: #ce3559;">?</span> Before;',
            '        <span style="color: #148a68;">string</span><span style="color: #ce3559;">?</span> After;',
            '        <span style="color: #5854c6;">PaginationOrder</span><span style="color: #ce3559;">?</span> Order;',
            '    },',
            '    <span style="color: #5854c6;">CancellationToken</span><span style="color: #ce3559;">?</span> cancellationToken',
            ')'
          ],
          ListMetadata_dotnet: [
            '<span style="color: #ce3559;">void</span> (',
            '    <span style="color: #148a68;">string</span><span style="color: #ce3559;">?</span> Before,',
            '    <span style="color: #148a68;">string</span><span style="color: #ce3559;">?</span> After,',
            '    <span style="color: #148a68;">int</span><span style="color: #ce3559;">?</span> Limit,',
            '    <span style="color: #5854c6;">PaginationOrder</span><span style="color: #ce3559;">?</span> Order',
            ')'
          ]
        }
    },

           //! - - USER MANAGEMENT - - !//
    { //* Install dependencies
      id: 3,
      title: "Install dependencies",
      doubleHeaders: {
        javascript: [
          {lang1: "Node SDK", lang2: "Next.js"}
        ],
        nextjs: [
          {lang1: "Node SDK", lang2: "Next.js"}
        ]
      },
      code: {
        javascript: [
          '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">npm install</span> @workos-inc/node'
        ],
        nodesdk: [
          '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">npm install</span> @workos-inc/node'
        ],
        nextjs: [
          '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">npm install</span> @workos-inc/authkit-nextjs'
        ]
      }
    },

    { //* Environment Variables (Node)
      id: 4,
      title: "Environment variables",
      code: {
        javascript: [
          '<span style="color: #8b8d98;">$</span> WORKOS_API_KEY<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>\''
        ]
      }
    },

    { //* Environment Variables (Next.js)
      id: 5,
      title: "Environment variables",
      code: {
        javascript: [
          '<span style="color: #8b8d98;">$</span> WORKOS_API_KEY<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> ',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span><span style="color: #143465;">"http://localhost:3000/callback"</span> <span style="color: #8b8d98;"># configured in the WorkOS dashboard</span>',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span><span style="color: #143465;">"&ltyour password&gt"</span> <span style="color: #8b8d98;"># generate a secure password here</span>'
        ]
      }
    },

    { //* Generate a strong password
      id: 6,
      title: "Generate a strong password",
      code: {
        javascript: [
          '<span style="color: #8b8d98;">$</span> openssl rand -base64 <span style="color: #0072dd;">24</span>',
        ]
      }
    },

    { //* Redirect users to AuthKit
      id: 7,
      title: "Redirect users to AuthKit",
      doubleHeaders: {
        javascript: [
          {lang1: "Node SDK", lang2: "Next.js"}
        ],
        nextjs: [
          {lang1: "Node SDK", lang2: "Next.js"}
        ]
      },
      code: {
        javascript: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">const</span> express <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">require</span>(<span style="color: #143465;">\'express\'</span>);',
          '<span style="color: #8b8d98;">2</span> <span style="color: #148a68;">const</span> { <span style="color: #5854c6;">WorkOS</span> } <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">require</span>(<span style="color: #143465;">\'@workos-inc/node\'</span>);',
          '<span style="color: #8b8d98;">3</span> ',
          '<span style="color: #8b8d98;">4</span> <span style="color: #148a68;">const</span> app <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">express</span>();',
          '<span style="color: #8b8d98;">5</span> ',
          '<span style="color: #8b8d98;">6</span> <span style="color: #148a68;">const</span> workos <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>(process.env.<span style="color: #0072dd;">WORKOS_API_KEY</span>);',
          '<span style="color: #8b8d98;">7</span> <span style="color: #148a68;">const</span> clientId <span style="color: #ce3559;">=</span> process.env.<span style="color: #0072dd;">WORKOS_CLIENT_ID</span>;',
          '<span style="color: #8b8d98;">8</span> ',
          '<span style="color: #8b8d98;">9</span> app.<span style="color: #5854c6;">get</span>(<span style="color: #143465;">\'/callback\'</span>, <span style="color: #148a68;">async</span> (req, res) <span style="color: #ce3559;">=></span> {',
          '<span style="color: #8b8d98;">10</span>   <span style="color: #8b8d98;">// The authorization code returned by AuthKit</span>',
          '<span style="color: #8b8d98;">11</span>   <span style="color: #148a68;">const</span> code <span style="color: #ce3559;">=</span> req.query.code;',
          '<span style="color: #8b8d98;">12</span> ',
          '<span style="color: #8b8d98;">13</span> ',
        ],
        nextjs: [
          ''
        ]
      }
    }
]

export default codeSnippets;

