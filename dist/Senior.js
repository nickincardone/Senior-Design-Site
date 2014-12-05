
// assets/javascripts/video/video_module.js
(function(angular) {

  var
    dependencies;

  dependencies = [

  ];

  angular.module('ni.Video', dependencies);

})(angular);

// assets/javascripts/video/video_controller.js
(function (angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$sce',
    videoController
  ];

  angular.module('ni.Video')
    .controller('videoController', definitions);

  function videoController($scope, $sce) {
    $scope.currentVideo = 0;

    $scope.videos = [
      {
        'title': 'JavaFX Tutorial 1',
        'src': '//www.youtube.com/embed/Phog21DF4xk',
        'subheading': 'Installation and Hello World with Scene Builder',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        'title': 'JavaFX Tutorial 2',
        'src': '//www.youtube.com/embed/Co0Kw5IBSvQ',
        'subheading': 'Setting Up Our Database',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        'title': 'JavaFX Tutorial 3',
        'src': '//www.youtube.com/embed/LDVztNtJWOo',
        'subheading': 'Changing Between Scenes',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        'title': 'JavaFX Tutorial 4',
        'src': '//www.youtube.com/embed/SCyZdWZi7C0',
        'subheading': 'Login Page Using SQLite Database',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        'title': 'JavaFX Tutorial 5',
        'src': '//www.youtube.com/embed/cqZRe9iKzo8',
        'subheading': 'CSS with JavaFX',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        'title': 'JavaFX Tutorial 6',
        'src': '//www.youtube.com/embed/ZtemWZ5IQeM',
        'subheading': 'VMore feature for our ToDoapp - Tasks DB',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        'title': 'JavaFX Tutorial 7',
        'src': '//www.youtube.com/embed/eq5Sup5vFL4',
        'subheading': 'Insert Features for our App',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        'title': 'JavaFX Tutorial 8',
        'src': '//www.youtube.com/embed/332b94pl6lg',
        'subheading': 'Remove and Organize features',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        'title': 'JavaFX Tutorial 9',
        'src': '//www.youtube.com/embed/0yF3FYQ6P-c',
        'subheading': 'Edit Features',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        'title': 'JavaFX Tutorial 10',
        'src': '//www.youtube.com/embed/arCkmFn0fo0',
        'subheading': 'Dialog Boxes and Wrap-Up',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }  /**,
      {
        'title': 'JavaFX Tutorial 11',
        'src': '//www.youtube.com/embed/arCkmFn0fo0',
        'subheading': 'fkdkf',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      } */
    ];

    $scope.videoUrl = function (vidUrl) {
      return $sce.trustAsResourceUrl(vidUrl);
    };

    $scope.setCurrentVideo = function (index) {
      $scope.currentVideo = index;
    };

    $scope.nextVideo = function () {
      $scope.currentVideo++;
    };

    $scope.previousVideo = function () {
      $scope.currentVideo--;
    };

  }

})(angular);

// assets/javascripts/text/text_module.js
(function(angular) {

  var
    dependencies;

  dependencies = [

  ];

  angular.module('ni.Text', dependencies);

})(angular);

// assets/javascripts/text/text_controller.js
(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    textController
  ];

  angular.module('ni.Text')
    .controller('textController', definitions);

  function textController($scope) {
  

  }

})(angular);

// assets/javascripts/states/states_module.js
(function(angular) {
  var
    dependencies;

  dependencies = [
    'ui.router'
  ];

  angular.module('ni.States', dependencies);

})(angular);

// assets/javascripts/states/states_config.js
(function(angular) {
  var
    definition;

  definition = [
    '$stateProvider',
    '$urlRouterProvider',
    statesConfig
  ];

  angular.module('ni.States')
    .config(definition);

  function statesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/video');

    $stateProvider
      .state('video', {
        url: '/video',
        views: {
          '': {
            templateUrl: 'video.html',
            controller: 'videoController'
          },
          'header': {
            templateUrl: 'header.html'
          }
        }
      })
      .state('text', {
        url: '/text',
        abstract: true,
        views: {
          '': {
            templateUrl: 'text.html',
            controller: 'textController'
          },
          'header': {
            templateUrl: 'header.html'
          }
        }
      })
      .state('text.tutorials', {
        url: '/tutorials',
        templateUrl: 'tutorials.html'
      })
      .state('text.tutorial0', {
        url: '/tutorials/0',
        templateUrl: '0.html'
      })
      .state('text.tutorial1', {
        url: '/tutorials/1',
        templateUrl: '1.html'
      })
      .state('about', {
        url: '/about',
        views: {
          '': {
            templateUrl: 'about.html'
          },
          'header': {
            templateUrl: 'header.html'
          }
        }
      });
  }
})(angular);

// assets/javascripts/templates_module.js
angular.module('ni.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('about.html',
    "<div id=\"example\" class=\"container content-container\"><div class=\"row\"><div class=\"jumbotron\"><h1>CS 4911 Senior Design</h1><p class=\"lead\">This site was created for our Georgia Tech Senior Design course</p><a class=\"btn\" href=\"https://github.com/nickincardone/Senior-Design-Site\">Code on GitHub</a></div></div><div class=\"row\"><div class=\"collaborators\"><h2>Group Members</h2><ul><li>Nichlos Incardone</li><li>Philip Johnson</li><li>Prahlad Venkatesh</li><li>Steven James Moore</li></ul></div></div></div>"
  );


  $templateCache.put('header.html',
    "<div class=\"navbar navbar-default navbar-static-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" ui-sref=\"about\">JavaFX Tutorial</a></div><div class=\"navbar-collapse collapse\"><ul class=\"nav navbar-nav navbar-right\"><li><a ui-sref=\"video\">Video</a></li><li><a ui-sref=\"text.tutorials\">Text</a></li></ul></div><!--/.nav-collapse --></div></div>"
  );


  $templateCache.put('text.html',
    "<div id=\"example\" class=\"container content-container\"><div style=\"margin-left: 0px\" class=\"row\"><div ui-view></div></div></div>"
  );


  $templateCache.put('tutorials.html',
    "<div class=\"jumbotron\"><h1>JavaFX Tutorials</h1><p class=\"lead\">Tutorials Originally Designed for CS 2340 at Georgia Tech</p></div><div class=\"tutorial-list\"><ul class=\"tutorials\"><li><a ui-sref=\"text.tutorial0\">Tutorial One</a><p>Installation and Hello World with Scene Builder</p></li><li><a ui-sref=\"text.tutorial1\">Tutorial Two</a><p>Setting Up Our Database</p></li><li><a ui-sref=\"\">Tutorial Three</a><p>Changing Between Scenes</p></li><li><a ui-sref=\"\">Tutorial Four</a><p>Login Page Using SQLite Database</p></li><li><a ui-sref=\"\">Tutorial Five</a><p>CSS with JavaFX</p></li><li><a ui-sref=\"\">Tutorial Six</a><p>VMore feature for our ToDoapp - Tasks DB</p></li><li><a ui-sref=\"\">Tutorial Seven</a><p>Insert Features for our App</p></li><li><a ui-sref=\"\">Tutorial Eight</a><p>Remove and Organize features</p></li><li><a ui-sref=\"\">Tutorial Nine</a><p>Edit Features</p></li><li><a ui-sref=\"\">Tutorial Ten</a><p>Dialog Boxes and Wrap-Up</p></li></ul></div>"
  );


  $templateCache.put('0.html',
    "<body style=\"background-color: #CCFFBB; align-content:center\"><h1 style=\"text-align: center\">Java FX Hello World Tutorial</h1><div class=\"divStyle\"><h2 class=\"header\">What is Java FX?</h2><ul><li>Java FX is a software platform for creating and developing rich internet applications that can run across a wide variety of devices.</li><li>Java FX is popularly known as an enhanced version of Swing.</li></ul></div><div class=\"divStyle\"><h2 class=\"header\">Model-View-Controller (MVC)</h2><ul><li>Java FX incorporates the MVC design pattern.</li><li>For a high level overview of the MVC pattern, look at the figure below:</li></ul><center><img style=\"background-color: white\" src=\"https://lh5.googleusercontent.com/3ugbbJPsAkq7z1yYlOo10NKfD-c_g9X9usf4SiIJAC-x5pFOgJTwgSvlLvj-V-Px4rlbM-7EfhzIpBMkpLQ-p9z9VrCWD4cgjkVJmyWqcKzk6COiYESak8hGS3bxhRTH3A\" width=\"700\" height=\"720\"></center></div><div class=\"divStyle\"><h2 class=\"header\">Software Installation</h2><ul><li>Downloaded and install NetBeans via <a href=\"http://www.oracle.com/technetwork/java/javase/downloads/index.html\">this link</a>.</li><li>Next, download and intall SceneBuilder via <a href=\"http://www.oracle.com/technetwork/java/javase/downloads/sb2download-2177776.html\">this link</a>.</li><ul class=\"note\"><li>Note: Choose to install SceneBuilder in the default location for use during this tutorial.</li></ul><li>Then, in NetBeans, go to <i>File</i> -&gt; <i>New Project</i> -&gt; <i>Java FX</i> -&gt; <i>Java FXML Application</i> -&gt; Name the project as <b>OurFirstProject</b>.</li><li>After doing this, you should see three files pop up in the navigator on the left hand side of the screen.</li><li>In the file OurFirstProject.java, you will see the start() method. this is the entry point for Java FX applications</li></ul><p>We will now learn how to use these files to make a simple UI which allows a user to click a button and generate the text �Hello World!�.</p></div><div class=\"divStyle\"><h2 class=\"header\">Developing the Hello World UI</h2><ul><li>Right click on the file <b>FXMLDocument.fxml</b> and click <i>Open</i>.</li><li>A dialog box will pop up, which contains a user interface to allow the user to create any kind of layout they want.</li><ul class=\"note\"><li>Note: This UI is provided by SceneBuilder, which we installed earlier.</li></ul><li>By default, the layout contains a button labelled <i>Click Me!</i>.</li><li>On the left, you can see AnchorPane, which is the root of the UI.</li><li>The AnchorPane contains the Button we see displayed.</li></ul><center><img src=\"https://lh3.googleusercontent.com/2lEfTtawJnucmIQXgwgTGWBiqiFjB_9q_XmDiMCw_zKUYx6HwTm8qr5Z3cTB4HtHb2Zen29FzTqaS4U0DM8Mct-_qO1_BwwktuTcjEUXIPscrSsHBRBNzg8Dhn1qqZa4TQ\" width=\"700\" height=\"400\"></center><p>Our task now is to somehow control what happens when we click on the button!</p><ul><li>The first step in doing this is to create a known ID for the button.</li><li>On the right hand side of the SceneBuilder window, collapse the Properties tab and click on the Code tab.</li><li>Change the field corresponding to fx:id to <i>helloButton</i></li><li>You will also see that the <i>On Action</i> field is defaulted to <i>handleButtonAction()</i>.</li><li>To understand this, go to the class FXMLController, where you can see the method handleButtonAction().</li><li>This method performs the actions you need to be performed when the button is clicked.</li><li>When creating labels, buttons or handler methods, don�t forget to include the @FXML tag above the statements or methods doing this.</li><li>The <i>handleButtonAction()</i> does two things: it prints something to the console, and it sets the text of a pre-created label to <i>Hello World!</i>.</li><li>This is what causes <i>Hello World!</i> to be displayed on the screen.</li><li>We now hit run, which is the green play button below the menu bar.</li></ul><p>You can now see the output, as shown below:</p><center><img src=\"https://lh5.googleusercontent.com/V7uDd-EmosSPu0-fX_qPJQYqEWs7UdO7y_I2yLoreRlkR1M22EU4QuOwvobtpxAHDqWpJlHyjO51Wg7M8_0sj1kgI7qgGeFvhLtKjRkgKBrDNxAkzc62QO66VNrHkaRZuw\" width=\"700\" height=\"500\"></center></div></body><style>ul{\n" +
    "        font-size: 24px;\n" +
    "    }\n" +
    "    p {\n" +
    "        font-size: 24px;\n" +
    "    }\n" +
    "    .divStyle {\n" +
    "        background-color: #F0F0F0;\n" +
    "        width: 80%;\n" +
    "        margin: 0 auto;\n" +
    "        padding-bottom: 10px;\n" +
    "    }\n" +
    "    .note {\n" +
    "        padding-left: 15px;\n" +
    "    }\n" +
    "    .header {\n" +
    "        background-color: #CCCCCC;\n" +
    "    }</style>"
  );


  $templateCache.put('1.html',
    "<body style=\"background-color: #CCFFBB; align-content:center\"><h1 style=\"text-align: center\">Creating A User Login</h1><div class=\"divStyle\"><h2 class=\"header\">Installing The Database (SQlite)</h2><p>In this tutorial, we will be learning how to create a login. In order to do this, we are going to establish a database connection. The database we will be using is SQLite, since it is very lightweight and works very well with Java.</p><ul><li>First, go to this link and download the latest JAR file. TODO: Add the link for the JAR file</li><li>The next step is to install SQLite by downloading the file from here in order to obtain the SQLite DB browser, which will allow you to install SQLite. TODO: Add the file from here link</li></ul></div><div class=\"divStyle\"><h2 class=\"header\">Creating A Project</h2><ul><li>The next step is to open NetBeans, this is where you will create a new project called <b>ToDoApp</b>.</li><ul class=\"note\"><li>Note that you will choose JavaFX FXML Application from the list of project types.</li></ul><li>Next you will add the JARs to your project by right clicking on Libraries and selecting Add JAR.</li><li>Then navigate to the location of the JAR file you downloaded earlier and select it.</li></ul></div><div class=\"divStyle\"><h2 class=\"header\">Setting Up The Database</h2><p>Now let’s setup our database so that we can use it easily</p><ul><li>First, navigate to the project folder of <b>ToDoApp</b> in the command line.</li><li>Then type in <i>sqlite3</i> and press enter.</li><li>You will now see a ‘sqlite>’ pop up in the next line, allowing user input.</li></ul><p>This will be the command-line interface through which we will type in SQLite-related commands.</p></div><div class=\"divStyle\"><h2 class=\"header\">Creating The Database</h2><ul><li>Now, type in <i>.open first.db</i> to create a new DB.</li><ul class=\"note\"><li>Note that you will now see a new file called <b>first</b> in the folder of <b>ToDoApp</b></li></ul></ul><p>Now, we can start adding in some data in the database. To do this, you can create .sql files which have SQL commands in them, like CREATE TABLE statements, and place these files in the ToDoApp folder. For example, if the .sql file is <b>maketable.sql</b>, then you can execute <i>.read maketable.sql</i> on the command-line. You can also execute simple <i>INSERT</i> or <i>SELECT</i> statements from the command-line, provided the tables you query have been created. Then, the output shows up in the command-line right below the query. We are now ready to integrate the NetBeans project with SQLite.</p></div><div class=\"divStyle\"><h2 class=\"header\">Changing Between Scenes</h2><p>This section contains information on how to navigate between pages, which will be important in establishing a login.</p><ul><li>Right-click on the package name in NetBeans, i.e., todoapp, and click on Java -> New Empty FXML and call it <b>FXMLHomePage</b>.</li><li>Then, hit next, check the box ‘Use Java Controller’, and hit next.</li><li>We will not be using CSS for now, so hit finish.</li><li>Following this, right-click on <b>FXMLDocument.fxml</b>, and click on Open. This will open up a new SceneBuilder window.</li><ul class=\"note\"><li>Note that by default, there will already be a button on the screen!</li></ul></ul><p>We will add a TextField using a simple drag and drop from the left panel under Controls. You could also add a label or two on top, looking like this:</p><p>TODO: Some picture</p><p>Note that the red label at the bottom is only to be displayed if the user enters the incorrect password. Then, we can create the home page, by opening <b>FXMLHomePage.fxml</b> in SceneBuilder. The home page can have a simple layout for now, including just one label displaying the words ‘Home Page’.</p></div><div class=\"divStyle\"><h2 class=\"header\">Changing Between Scenes (cont.)</h2><ul><li>In the file <b>FXMLDocumentController.java</b>, go to the automatically generated method <i>handleButtonAction()</i>, which will correspond to the login button and delete the contents of the method.</li><li>Add a new line <i>Parent home_page_parent = FXMLLoader.load(getClass().getResource(“FXMLHomePage.fxml”);</i>.</li><li>You will need to right click on Parent and click on Fix Imports to make this line work.</li><li>Do this whenever a class you’re using produces an error.</li><ul class=\"note\"><li>Note that there is file I/O involved here, so we will need to append ‘throws IOException’ after <i>void handleButtonAction(ActionEvent event)</i>.</li></ul><li>Then add the line <i>Scene home_page_scene = new Scene(home_page_parent);</i>, this corresponds to SceneBuilder.</li><li>Following this, add the line <i>Stage app_stage = (Stage)((Node) event.getSource().getScene().getWindow());</i>.</li><ul class=\"note\"><li>Note that a stage is the place where everything takes place!</li></ul><li>To check what each method in that line does, just right click on it and view the Javadoc.</li><li>Change the stage to the home page by using the <i>setScene()</i> method.</li></ul><p>In the end, the <i>handleButtonAction()</i> method will look something like this:</p><p>TODO: Add a picture</p><ul><li>Then, hit the play button and hit the button once the page shows up. It will navigate to the home page screen.</li></ul></div><div class=\"divStyle\"><h2 class=\"header\">Verify Login Credentials</h2><ul><li>The first thing to do here would be to make sure that there is a table in the SQLite database with some data in it.</li><li>This was covered in the first section of this tutorial, and is done by simple INSERT statements in the appropriate table.</li><li>Once this is done, we can go ahead and write code in the controller classes that we are concerned with.</li><li>Make sure that all the components of the Welcome page, i.e., <b>FXMLDocument.xml</b>, have IDs whose names are known, so that they can be accessed in the code.</li><li>The IDs of the components are the means by which we will be able to update the content of these fields.</li><li>The ID can be changed by going to SceneBuilder, clicking on the desired component, and changing its fxid on the right panel, under Code.</li><li>Make sure you hit save in the SceneBuilder window!</li><li>Then, you need to have the tag @FXML, followed by private declarations of each of these components with the variable name corresponding to the FXID, in order to link the components in SceneBuilder to the code.</li></ul><p>For example, the label with fxid ‘invalid_label’ in SceneBuilder is declared as an variable like this: <i>@FXML private Label invalid_label;</i></p></div><div class=\"divStyle\"><h2 class=\"header\">Verify Login Credentials (cont.)</h2><ul><li>Create a function called <i>isValidCredentials()</i> in the <b>FXMLDocumentController.java</b> file.</li><li>The purpose of this function is to return a true or false depending on whether or not the credentials the user has entered exist in the database.</li><li>If they don’t, the error label at the bottom (in red) will be displayed.</li><li>However, if they do, then navigate to the home page using the <i>setScene()</i> and <i>show()</i> methods, as illustrated in the first part of this tutorial.</li><li>In order to clear or edit a TextField in SceneBuilder, simple methods like <i>clear()</i> and <i>setText()</i> can be used.</li></ul><p>For example, <i>username_box.clear()</i> will clear the username text field, and <i>invalid_label.setText(“Sorry, invalid credentials!”)</i> will render the label for ‘invalid_label’.</p></div><div class=\"divStyle\"><h2 class=\"header\">Connecting The Database</h2><ul><li>First, navigate to the <i>isValidCredentials()</i> function you have just created.</li><li>In order to do this, you need a Connection variable and a java.sql.Statement variable.</li><li>Call these ‘conn’ and ‘statement’ respectively, and initialize them both to null.</li><li>‘conn’ is used to connect to the database, and ‘statement’ is used to send SQL statements to it.</li><ul class=\"note\"><li>Note, the code that follows will be enclosed in a try-catch statement to ensure that the forthcoming errors that may pop up are dealt with suitably.</li></ul><li>The first line you write is: <i>conn = DriverManager.getConnection(“jdbc:sqlite:first.db”);</i>.</li><li>Here we are connecting to the database that was created in the first part.</li><li>Then write: <i>conn.setAutoCommit(false);</i></li><li>Next we need to create the statement, so write: <i>statement = conn.createStatement();</i></li><li>We now need to verify the data corresponding to the credentials entered by the user by writing the following lines of code: <i>ResultSet rs = statement.executeQuery(“SELECT * FROM Users WHERE USERNAME = “ + “‘“ + username_box.getText() + “‘“ + “ AND PASSWORD = “ + “‘“ + password_box.getText() + “‘“);</i></li><li>This will generate the record corresponding to the entered credentials, and will be stored in the object ‘rs’.</li><li>Then, we can access the data in that object and check whether it is valid.</li></ul><p>This code to do this as follow:<br><br><i>boolean let_in = false;<br>while(rs.next()) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (rs.getString(“USERNAME”) != null && rs.getString(“PASSWORD”) != null) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String username = rs.getString(“USERNAME”);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(“USERNAME = “ + username);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String password = rs.getString(“PASSWORD”);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(“PASSWORD = “ + password);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let_in = true;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}<br>rs.close();<br>statement.close();<br>c.close();</i></p><p>In the above code, we are first checking whether the result set has any records. We then set the let_in variable to true, indicating that the credentials are valid and we are letting the user into the database.</p></div></body><style>ul {\n" +
    "        font-size: 24px;\n" +
    "        padding-right: 10px;\n" +
    "    }\n" +
    "\n" +
    "    p {\n" +
    "        font-size: 24px;\n" +
    "        padding-left: 10px;\n" +
    "        padding-right: 10px;\n" +
    "    }\n" +
    "\n" +
    "    .divStyle {\n" +
    "        background-color: #F0F0F0;\n" +
    "        width: 80%;\n" +
    "        margin: 0 auto;\n" +
    "        padding-bottom: 10px;\n" +
    "    }\n" +
    "\n" +
    "    .note {\n" +
    "        padding-left: 15px;\n" +
    "    }\n" +
    "\n" +
    "    .header {\n" +
    "        background-color: #CCCCCC;\n" +
    "        padding-left: 5px;\n" +
    "    }</style>"
  );


  $templateCache.put('video.html',
    "<div id=\"example\" class=\"container video-container\"><div class=\"row\"><div class=\"lessons-nav col-sm-3 hidden-xs\"><div ng-repeat=\"video in videos\"><div ng-class=\"{active: (currentVideo == $index)}\" ng-click=\"setCurrentVideo($index)\" class=\"btn\">{{video.title}}</div></div></div><center><div class=\"video-panel col-sm-9 col-xs-12\"><div class=\"video-title\"><h3>{{videos[currentVideo].title}}</h3></div><iframe width=\"420\" height=\"315\" ng-src=\"{{videoUrl(videos[currentVideo].src)}}\" frameborder=\"0\" allowfullscreen></iframe><div class=\"video-subtitle\"><h4>{{videos[currentVideo].subheading}}</h4></div><div class=\"video-description\">{{videos[currentVideo].description}}</div><div class=\"bottom-nav\"><div ng-disabled=\"currentVideo == 0\" ng-click=\"previousVideo()\" class=\"pull-left btn\">Previous</div><a ui-sref=\"text.tutorials\" class=\"btn\">View Lesson's Text</a><div ng-disabled=\"currentVideo == videos.length - 1\" ng-click=\"nextVideo()\" class=\"pull-right btn\">Next</div></div></div></center></div></div>"
  );

}]);


// assets/javascripts/main_module.js
(function(angular) {

  var
    dependencies;

  dependencies = [
    'ni.States',
    'ni.Templates',
    'ni.Video',
    'ni.Text'
  ];

  angular.module('ni.SeniorDesign', dependencies);

})(angular);
