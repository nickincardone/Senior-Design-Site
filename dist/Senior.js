
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
        'description': ''
      },
      {
        'title': 'JavaFX Tutorial 2',
        'src': '//www.youtube.com/embed/Co0Kw5IBSvQ',
        'subheading': 'Setting Up Our Database',
        'description': ''
      },
      {
        'title': 'JavaFX Tutorial 3',
        'src': '//www.youtube.com/embed/LDVztNtJWOo',
        'subheading': 'Changing Between Scenes',
        'description': ''
      },
      {
        'title': 'JavaFX Tutorial 4',
        'src': '//www.youtube.com/embed/SCyZdWZi7C0',
        'subheading': 'Login Page Using SQLite Database',
        'description': ''
      },
      {
        'title': 'JavaFX Tutorial 5',
        'src': '//www.youtube.com/embed/cqZRe9iKzo8',
        'subheading': 'CSS with JavaFX',
        'description': ''
      },
      {
        'title': 'JavaFX Tutorial 6',
        'src': '//www.youtube.com/embed/ZtemWZ5IQeM',
        'subheading': 'VMore feature for our ToDoapp - Tasks DB',
        'description': ''
      },
      {
        'title': 'JavaFX Tutorial 7',
        'src': '//www.youtube.com/embed/eq5Sup5vFL4',
        'subheading': 'Insert Features for our App',
        'description': ''
      },
      {
        'title': 'JavaFX Tutorial 8',
        'src': '//www.youtube.com/embed/332b94pl6lg',
        'subheading': 'Remove and Organize features',
        'description': ''
      },
      {
        'title': 'JavaFX Tutorial 9',
        'src': '//www.youtube.com/embed/0yF3FYQ6P-c',
        'subheading': 'Edit Features',
        'description': ''
      },
      {
        'title': 'JavaFX Tutorial 10',
        'src': '//www.youtube.com/embed/arCkmFn0fo0',
        'subheading': 'Dialog Boxes and Wrap-Up',
        'description': ''
      }  /**,
      {
        'title': 'JavaFX Tutorial 11',
        'src': '//www.youtube.com/embed/arCkmFn0fo0',
        'subheading': 'fkdkf',
        'description': ''
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
      .state('text.tutorial2', {
        url: '/tutorials/2',
        templateUrl: '2.html'
      })
      .state('text.tutorial3', {
        url: '/tutorials/3',
        templateUrl: '3.html'
      })
      .state('text.tutorial4', {
        url: '/tutorials/4',
        templateUrl: '4.html'
      })
      .state('text.tutorial5', {
        url: '/tutorials/5',
        templateUrl: '5.html'
      })
      .state('text.tutorial6', {
        url: '/tutorials/6',
        templateUrl: '6.html'
      })
      .state('text.tutorial7', {
        url: '/tutorials/7',
        templateUrl: '7.html'
      })
      .state('text.tutorial8', {
        url: '/tutorials/8',
        templateUrl: '8.html'
      })
      .state('text.tutorial9', {
        url: '/tutorials/9',
        templateUrl: '9.html'
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
    "<div class=\"jumbotron\"><h1>JavaFX Tutorials</h1><p class=\"lead\">Tutorials Originally Designed for CS 2340 at Georgia Tech</p></div><div class=\"tutorial-list\"><ul class=\"tutorials\"><li><a ui-sref=\"text.tutorial0\">Tutorial One</a><p>Installation and Hello World with Scene Builder</p></li><li><a ui-sref=\"text.tutorial1\">Tutorial Two</a><p>Setting Up Our Database</p></li><li><a ui-sref=\"text.tutorial2\">Tutorial Three</a><p>Changing Between Scenes</p></li><li><a ui-sref=\"text.tutorial3\">Tutorial Four</a><p>Login Page Using SQLite Database</p></li><li><a ui-sref=\"text.tutorial4\">Tutorial Five</a><p>CSS with JavaFX</p></li><li><a ui-sref=\"text.tutorial5\">Tutorial Six</a><p>VMore feature for our ToDoapp - Tasks DB</p></li><li><a ui-sref=\"text.tutorial6\">Tutorial Seven</a><p>Insert Features for our App</p></li><li><a ui-sref=\"text.tutorial7\">Tutorial Eight</a><p>Remove and Organize features</p></li><li><a ui-sref=\"text.tutorial8\">Tutorial Nine</a><p>Edit Features</p></li><li><a ui-sref=\"text.tutorial9\">Tutorial Ten</a><p>Dialog Boxes and Wrap-Up</p></li></ul></div>"
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


  $templateCache.put('2.html',
    "<p dir=\"ltr\">This section contains information on how to navigate between pages, which will be important in establishing a login. Now, right-click on the package name in NetBeans, i.e., todoapp, and click on Java -&gt; New Empty FXML and call it FXMLHomePage. Then, hit next, check the box ‘Use Java Controller’, and hit next. We will not be using CSS for now, so hit finish. Then, right-click on FXMLDocument.fxml, and click on Open. This will open up a new SceneBuilder window. By default, there will already be a button on the screen. We will add a TextField using a simple drag and drop from the left panel under Controls. You could also add a label or two on top, looking like this:</p><p dir=\"ltr\"><img src=\"https://lh4.googleusercontent.com/viSz9he5sk8ORzQwoLrzHNHATDuf4ZTYKt1_8PYlqBAY3nsz7kECbJ5QVJOPOIkohsQePVMXnOvfVSJdd5ix_Wl0mBA0eT3d6BJ-EbNwV81Ad5BwDzNyOt8MKIuCyXGBvw\" width=\"624px;\" height=\"348px;\" alt=\"tut2screenshot1.PNG\"></p><br><p dir=\"ltr\">Note that the red label at the bottom is only to be displayed if the user enters the incorrect password. Then, we can create the home page, by opening FXMLHomePage.fxml in SceneBuilder. The home page can have a simple layout for now, including just one label displaying the words ‘Home Page’.</p><br><p dir=\"ltr\">Now, in the file FXMLDocumentController.java, go to the automatically generated method handleButtonAction, which will correspond to the login button. Delete the contents of that method. We will now begin to establish the page navigation. To begin, add a new line ‘Parent home_page_parent = FXMLLoader.load(getClass().getResource(“FXMLHomePage.fxml”);’. You will need to right click on Parent and click on Fix Imports to make this line work. Do this whenever a class you’re using produces an error. Note that there is file I/O involved here, so we will need to append ‘throws IOException’ after void handleButtonAction(ActionEvent event). Then, add the line Scene home_page_scene = new Scene(home_page_parent);. This corresponds to SceneBuilder. Then, add the lines Stage app_stage = (Stage)((Node) event.getSource().getScene().getWindow());. A stage is the place where everything takes place. To check what each method in that line does, just right click on it and view the Javadoc. Then, change the stage to the home page. This is done by using the setScene() method. In the end, the handleButtonAction() method will look something like this:<br><br></p><p dir=\"ltr\"><img src=\"https://lh5.googleusercontent.com/Yy07ippabn5cZKMd8ciB8__DXj_fmypsGebIxcdSWh05XimeWFP47_HESniGL7yRttyueIWFMJdiaPBXzRmWfmOC930rx85nzhpFqwgUZVFVgWEJZOCWP0F-gjV6Dm3QtQ\" width=\"665px;\" height=\"354px;\" alt=\"tut2screenshot2.PNG\"></p><br><p>Then, hit the play button and hit the button once the page shows up. It will navigate to the home page screen.</p><style>body {\n" +
    "\n" +
    "    }\n" +
    "    ul {\n" +
    "        font-size: 24px;\n" +
    "        padding-right: 10px;\n" +
    "    }\n" +
    "\n" +
    "    p {\n" +
    "        font-size: 24px;\n" +
    "        padding-left: 10px;\n" +
    "        padding-right: 10px;\n" +
    "        text-align: center;\n" +
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


  $templateCache.put('3.html',
    "<p dir=\"ltr\">The first thing to do here would be to make sure that there is a table in the SQLite database with some data in it. This was covered in the first section of this tutorial, and is done by simple INSERT statements in the appropriate table. Once this is done, we can go ahead and write code in the controller classes that we are concerned with. Make sure that all the components of the Welcome page, i.e., FXMLDocument.xml, have IDs whose names are known, so that they can be accessed in the code. The IDs of the components are the means by which we will be able to update the content of these fields. The ID can be changed by going to SceneBuilder, clicking on the desired component, and changing its fxid on the right panel, under Code. Make sure you hit save in the SceneBuilder window. Then, you need to have the tag @FXML, followed by private declarations of each of these components with the variable name corresponding to the FXID, in order to link the components in SceneBuilder to the code. For example, the label with fxid ‘invalid_label’ in SceneBuilder is declared as an variable like this:</p><p dir=\"ltr\">@FXML</p><p dir=\"ltr\">private Label invalid_label;</p><br><p dir=\"ltr\">Now, create a function called isValidCredentials() in the FXMLDocumentController.java file. The purpose of this function is to return a true or false depending on whether or not the credentials the user has entered exist in the database. If they don’t, the error label at the bottom (in red) will be displayed. If they do, then navigate to the home page using the setScene() and show() methods, as illustrated in the first part of this tutorial. In order to clear or edit a TextField in SceneBuilder, simple methods like clear() and setText() can be used. For example, username_box.clear() will clear the username text field, and invalid_label.setText(“Sorry, invalid credentials!”) will render the label for ‘invalid_label’.</p><br><p dir=\"ltr\">Now, we will look at how to connect to the database. First, navigate to the isValidCredentials() function you have just created. In order to do this, you need a Connection variable and a java.sql.Statement variable. Call these ‘conn’ and ‘statement’ respectively, and initialize them both to null. ‘conn’ is used to connect to the database, and ‘statement’ is used to send SQL statements to it. The code that follows will be enclosed in a try-catch statement to ensure that the forthcoming errors that may pop up are dealt with suitably. The first line you write is:<br>conn = DriverManager.getConnection(“jdbc:sqlite:first.db”);<br>Here, we are connecting to the database that was created in the first part. Then, write:<br>conn.setAutoCommit(false);<br>Then, we need to create the statement, so write:<br>statement = conn.createStatement();<br>We now need to verify the data corresponding to the credentials entered by the user. To do this, write the following line of code:<br>ResultSet rs = statement.executeQuery(“SELECT * FROM Users WHERE USERNAME = “ + “‘“ + username_box.getText() + “‘“ + “ AND PASSWORD = “ + “‘“ + password_box.getText() + “‘“);</p><p dir=\"ltr\">This will generate the record corresponding to the entered credentials, and will be stored in the object ‘rs’. Then, we can access the data in that object and check whether it is valid. The code to do this is as follows:<br><br></p><p dir=\"ltr\">boolean let_in = false;</p><p dir=\"ltr\">while(rs.next()) {</p><p dir=\"ltr\">if (rs.getString(“USERNAME”) != null &amp;&amp; rs.getString(“PASSWORD”) != null) {</p><p dir=\"ltr\">String username = rs.getString(“USERNAME”):</p><p dir=\"ltr\">System.out.println(“USERNAME = “ + username);<br>String password = rs.getString(“PASSWORD”):</p><p dir=\"ltr\">System.out.println(“PASSWORD = “ + password);</p><p dir=\"ltr\">let_in = true;</p><p dir=\"ltr\">}</p><p dir=\"ltr\">}</p><p dir=\"ltr\">rs.close();</p><p dir=\"ltr\">statement.close();</p><p dir=\"ltr\">c.close();</p><br><p dir=\"ltr\">In the above code, we are first checking whether the result set has any records. We then set the let_in variable to true, indicating that the credentials are valid and we are letting the user into the database.</p><div><br></div><style>body {\n" +
    "\n" +
    "    }\n" +
    "    ul {\n" +
    "        font-size: 24px;\n" +
    "        padding-right: 10px;\n" +
    "    }\n" +
    "\n" +
    "    p {\n" +
    "        font-size: 24px;\n" +
    "        padding-left: 10px;\n" +
    "        padding-right: 10px;\n" +
    "        text-align: center;\n" +
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


  $templateCache.put('4.html',
    "<p dir=\"ltr\">In this tutorial, we will learn how to use Cascading Stylesheets (CSS) in conjunction with JavaFX.</p><br><p dir=\"ltr\">The first step here would be to open Netbeans, go to the ‘Source Packages’ directory, and right click on the default package that you find there. Then, select ‘Other’, and filter for ‘Cascading Style Sheet’. Then, name the file and create it.</p><br><p dir=\"ltr\">In order to apply the CSS code to the JavaFX project in question, the following code can be used in the start() method of the main Java file (ToDoApp.java):<br>String css = ToDoApp.getResource(“UglyStyle.css”).toExternalForm();<br>scene.getStyleSheets().add(css); //Adding CSS to JavaFX.</p><br><p dir=\"ltr\">By using these simple steps, it is possible to write a short amount of CSS code that serves as a standard to style all the buttons and labels, and you can easily apply that CSS code to JavaFX using the Java code above.</p><div><br></div><style>body {\n" +
    "\n" +
    "    }\n" +
    "    ul {\n" +
    "        font-size: 24px;\n" +
    "        padding-right: 10px;\n" +
    "    }\n" +
    "\n" +
    "    p {\n" +
    "        font-size: 24px;\n" +
    "        padding-left: 10px;\n" +
    "        padding-right: 10px;\n" +
    "        text-align: center;\n" +
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


  $templateCache.put('5.html',
    "<p dir=\"ltr\">This tutorial is a follow-up to one of the earlier tutorials in which we learned how to use SQL in JavaFX. The first step here would be to create a simple SQL file in Notepad with a CREATE TABLE statement, that creates the table ‘Tasks’. This table could contain fields like Title, Location, Notes, Time, etc. Also, create a SQL file with INSERT statement(s), inserting data into this table.</p><br><p dir=\"ltr\">Then, open Netbeans, right click on the package ‘todoapp’, New-&gt;Empty FXML-&gt;Name. If you want, you can add a CSS file along the way. Edit this FXML page as you want, using SceneBuilder. A suitable layout would look like the following:<br><br></p><p dir=\"ltr\"><img src=\"https://lh4.googleusercontent.com/Tnp8Ldw0rE4NiS1UUO_dHEaI_vpnzQe5wFJ6GnKQZpAJxOZvWEhxvN_DnHPfmTQ9tqIz_b5SoPRYuncgzHKS9hU2DgbYcL5GKfbcq9A8sy77beTx_mYA86Bnoh--TG-W4A\" width=\"624px;\" height=\"367px;\" alt=\"tut6screenshot1.PNG\"></p><p dir=\"ltr\">Here, the dropdownlists were created using MenuButtons. The Date field is a DatePicker, which allows the user to conveniently select the date required. The three drop-down lists will display the hour, minute, and AM/PM depending on their selection. To facilitate this, the action methods of each of these buttons have to be edited. For example,</p><p dir=\"ltr\">private void hourMenuItemButtonAction(ActionEvent event) throws IOException {</p><p dir=\"ltr\">MenuItem menu = (MenuItem) event.getSource();<br>hour_menubutton.setText(menu.getText());</p><p dir=\"ltr\">}</p><p dir=\"ltr\">Here, ‘hour_menubutton’ is the MenuButton corresponding to the hour. When it is selected, the text of the menu button is edited to reflect the change. The code for the minute and AM/PM fields is similar.</p><br><p dir=\"ltr\">The last thing to deal with here is the ‘Done’ button. This is the part of the UI that involves interaction with the database, SQLite. The first thing to do is to grab the value of the hour selected with the MenuButton. If the database table you are creating stores 24-hour dates, you will have to modify the date inserted as necessary, by finding out if it is AM or PM and converting accordingly. Once the data to be inserted is collected, a query string can be formed, similar to the following:<br>String query = “INSERT INTO Tasks (TITLE,LOCATION,NOTES,TIMING) VALUES (“ + “‘“ + title_text.getText() + “‘,” + “‘“ + location_text.getText() + “‘.” + “‘“ + notes_text.getText() + “‘,” + “‘“ + minute_menubutton.getText() + “:00” + “‘);”;</p><p dir=\"ltr\">Here, the table field ‘Timing’ will contain the string concatenation of the hour and minute values, with the hour modified in the previous step, as needed. Then, use the following code to perform the insert operation into the table:</p><p dir=\"ltr\">public void insertStatement() {</p><p dir=\"ltr\">Connection c = null;<br>Statement stat = null;</p><p dir=\"ltr\">try {</p><p dir=\"ltr\">Class.forName(“org.sqlite.JDBC”);</p><p dir=\"ltr\">c = DriverManager.getConnection(“jdbc:sqlite:first.db”);</p><p dir=\"ltr\">c.setAutoCommit(false);</p><p dir=\"ltr\">stat = c.createStatement();</p><p dir=\"ltr\">stat.executeUpdate(query);</p><p dir=\"ltr\">stat.close();</p><p dir=\"ltr\">c.commit();</p><p dir=\"ltr\">c.close();</p><p dir=\"ltr\">} catch (Exception e) {<br>System.err.println(“Error”);</p><p dir=\"ltr\">}</p><p dir=\"ltr\">}</p><br><p dir=\"ltr\">The key feature here that was not introduced in the earlier tutorial is the ‘executeUpdate()’ function call. This method is used for insertions, updates, and deletes to/from a particular table. Then, run the JavaFX page (which would have a suitable button for insertion). Now, in order to verify that the data has been inserted suitably, navigate to the location of the .sql files, and open the command-line utility, sqlite, by typing in sqlite3 as explained in tutorial #2. Then, write a simple SELECT statement as you wish in order to view the contents of the table.</p><div><br></div><style>body {\n" +
    "\n" +
    "    }\n" +
    "    ul {\n" +
    "        font-size: 24px;\n" +
    "        padding-right: 10px;\n" +
    "    }\n" +
    "\n" +
    "    p {\n" +
    "        font-size: 24px;\n" +
    "        padding-left: 10px;\n" +
    "        padding-right: 10px;\n" +
    "        text-align: center;\n" +
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


  $templateCache.put('6.html',
    "<p dir=\"ltr\">In this tutorial, we will see how we can view the contents of the database in the app itself. Up until now, we have relied on the command-line utility to do this. First, open the NetBeans project ToDoList created in tutorial 1, and create a new JavaFX document with the following layout:</p><br><p dir=\"ltr\"><img src=\"https://lh6.googleusercontent.com/HVaVKkIV-Fx4hiKCFbO4IZHGUNUq5ZBpTCC168BgE7IMR5k7bsKqgF4F9SqWJxPiAa94zce9sStO2E5RujzXAbmfdgmhMCtuGYLTCAcBgKB9G5eO_7D4d5CmlOtKURHOYw\" width=\"624px;\" height=\"349px;\" alt=\"tut7screenshot1.PNG\"></p><p dir=\"ltr\">Here, the big box on the right hand side is a ListView, which will display each row of the database table, as queried, on each row of the ListView.</p><br><p dir=\"ltr\">The first thing we will do here is create a new list of items (to hold the database contents) as follows:<br>ObservableList items = FXCollections.observableArrayList();</p><p dir=\"ltr\">Then, we will obtain the tasks (Task table entries) from the database table. To do this, as explained in earlier tutorials, establish a connection, create a statement variable that is assigned to this connection, and create a result set that will contain the results of the SELECT query specified. This will be in the form:</p><p dir=\"ltr\">void refreshList() {<br>ResultSet rs = stat.executeQuery(“SELECT * FROM Tasks ORDER BY Timing DESC”); /*The ‘order by’ and ‘DESC’ here is determined by the corresponding entries in the UI.*/</p><p dir=\"ltr\">while (rs.next()) {</p><p dir=\"ltr\">String title = rs.getString(“TITLE”);</p><p dir=\"ltr\">String title = rs.getString(“LOCATION”);</p><p dir=\"ltr\">String title = rs.getString(“TIMING”).toString();<br>items.add(title + “\\t” + location + “\\t” + timing);</p><p dir=\"ltr\">}</p><p dir=\"ltr\">rs.close();</p><p dir=\"ltr\">}</p><br><p dir=\"ltr\">The line containing ‘items.add()’ populates that list with the contents of the database in the order specified by the query. Then, set the items in the ListView to be equal to this list, i.e.,</p><p dir=\"ltr\">tasks_listview.setItems(items);</p><br><p>Note that we are updating the values of the MenuButton as in the previous tutorial, and refreshing the list by executing the above code every time, so as to ensure the change in the MenuButton is reflected in the ListView.</p><style>body {\n" +
    "\n" +
    "    }\n" +
    "    ul {\n" +
    "        font-size: 24px;\n" +
    "        padding-right: 10px;\n" +
    "    }\n" +
    "\n" +
    "    p {\n" +
    "        font-size: 24px;\n" +
    "        padding-left: 10px;\n" +
    "        padding-right: 10px;\n" +
    "        text-align: center;\n" +
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


  $templateCache.put('7.html',
    "<p dir=\"ltr\">Following up on the previous tutorial, where we talked about the buttons at the bottom of the page (Notes, Complete, and Edit), we will demonstrate here how to incorporate them. The first step is to create a new JavaFX document in the todoapp package. The layout is very simple:</p><p dir=\"ltr\"><img src=\"https://lh4.googleusercontent.com/3jzuKK8NZzwS0zPHix_HFWAnIhCjsTT7vqS45LjRKNaqH8pB2OeqBL5T5KIx1I9d33CPisVmuEmhtDIIxliZqzFnUgZiHYtIlBCjd_8oIx23WJlLp0vxV96B2WtetZ8y2Q\" width=\"624px;\" height=\"360px;\" alt=\"tut8screenshot1.PNG\"> The back button will take us back to the viewing page (shown in tutorial #7). As a reminder, the text field in this page will display the notes corresponding to the selected item in the list view on the other page (Notes is a field in the database table ‘Tasks’). The selected item can be obtained from the ListView as follows:</p><p dir=\"ltr\">String selected_item = tasks_listview.getSelectionModel().getSelectedItem().toString();</p><br><p dir=\"ltr\">The next step is to obtain the ListView values corresponding to the selected item, and create a SELECT query out of it. This is done by suitably parsing the string ‘selected_item’ obtained above. The following snippet is one way of performing this task:<br>String queryString = “SELECT NOTES FROM TASKS WHERE TIMING = “ + “‘“ + selected_item.substring(selected_item.lastIndexOf(“\\t”) + 1, selected_item.length()) + “‘“ + “;”;</p><p dir=\"ltr\">ResultSet rs = stat.executeQuery(queryString);</p><p dir=\"ltr\">while (rs.next()) {</p><p dir=\"ltr\">notes = rs.getString(“NOTES”); //Assigning the appropriate notes to the ‘notes’ variable</p><p dir=\"ltr\">}</p><p dir=\"ltr\">rs.close();</p><br><p dir=\"ltr\">Once we have done the above, we have to make sure these changes are reflected in the Notes JavaFX file too (the FXML document created at the start of this tutorial). By doing this, we can ensure that once the Notes button is clicked on the first page, the notes are loaded onto the new scene before the scene is even shown. The passing of values between two different scenes can be done as follows:<br><br>FXMLLoader loader = new FXMLLoader(getClass().getResource(“FXMLNotes.fxml”);</p><p dir=\"ltr\">Scene notes_scene = new Scene((Pane) loader.load());</p><p dir=\"ltr\">Stage app_stage = (Stage) ((Node) event.getSource()).getScene().getWindow();</p><p dir=\"ltr\">app_stage.hide();</p><p dir=\"ltr\">app_stage.setScene(notes_scene);</p><p dir=\"ltr\">FXMLNotesController controller = loader.&lt;FXMLNotesController&gt;getController();</p><p dir=\"ltr\">controller.setNotes(notes);</p><p dir=\"ltr\">app_stage.show();</p><br><p dir=\"ltr\">Another button that we are concerned with here is the ‘Complete’ button. In its action method, we get the index of the ListView row to be deleted, via:<br>Integer delete_index = tasks_listview.getSelectionModel().getSelectedIndex();</p><p dir=\"ltr\">if (!delete_index.equals(null)) {</p><p dir=\"ltr\">deleteTask();</p><p dir=\"ltr\">refreshList(); //see tutorial #7 for an overview of this method</p><p dir=\"ltr\">}</p><br><p dir=\"ltr\">deleteTask() shown above is a simple method that deletes a particular item from the table in the database. For example, “DELETE from Tasks WHERE TIMING = “ + “‘“ + selected_item.substring(selected_item.lastIndexOf(“\\t”) + 1, selected_item.length()) + “‘“ + “;”; The rest of the deleteTask() method is very similar to the insertStatement() method in tutorial #6.</p><p>The refreshList() method is then called, which makes sure that the entries in the UI are ordered and updated as per the entries in the database.</p><style>body {\n" +
    "\n" +
    "    }\n" +
    "    ul {\n" +
    "        font-size: 24px;\n" +
    "        padding-right: 10px;\n" +
    "    }\n" +
    "\n" +
    "    p {\n" +
    "        font-size: 24px;\n" +
    "        padding-left: 10px;\n" +
    "        padding-right: 10px;\n" +
    "        text-align: center;\n" +
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


  $templateCache.put('8.html',
    "<p dir=\"ltr\">In this tutorial, we will learn how to edit the entries in the database, by specifying edits in the JavaFX UI. This corresponds to the ‘Edit’ button introduced in the figure in tutorial #7. Note that in terms of UI, the editing is exactly the same as insertion. Therefore, we will use the same UI that was used in tutorial #6 for the edit page. The first thing to take care of here is the Edit button action. Here, we will first create strings corresponding to the various fields of the ListView entry to be edited. The code for this is as follows (note the similarity to tutorial #8):</p><p dir=\"ltr\">Connection c = null;</p><p dir=\"ltr\">Statement stat = null;</p><p dir=\"ltr\">try {</p><p dir=\"ltr\">Class.forName(“org.sqlite.JDBC”);</p><p dir=\"ltr\">c = DriverManager.getConnection(“jdbc:sqlite:first.db”);</p><p dir=\"ltr\">c.setAutoCommit(false);</p><p dir=\"ltr\">stat = c.createStatement();</p><p dir=\"ltr\">String selected_item = tasks_listview.getSelectionModel().getSelectedItem().toString();</p><p dir=\"ltr\">String queryString = “SELECT * FROM TASKS WHERE TIMING + “+ “‘“ + selected_item.substring(selected_item.lastIndexOf(“\\t”) + 1, selected_item.length()) + “‘“ + “;”;</p><p dir=\"ltr\">ResultSet rs = stat.executeQuery(queryString);</p><p dir=\"ltr\">String time_text = selected_item.substring(selected_item.lastIndexOf(“\\t”) + 1, selected_item.length();</p><p dir=\"ltr\">//The following five variables are subject to the exact formatting of the date string that the database requires.</p><p dir=\"ltr\">String time_text_year = time_text.substring(0,4);</p><p dir=\"ltr\">String time_text_month = time_text.substring(5,7);</p><p dir=\"ltr\">String time_text_day = time_text.substring(8,10);</p><p dir=\"ltr\">String time_text_hour = time_text.substring(11,13);</p><p dir=\"ltr\">String time_text_minute = time_text.substring(14,14);</p><p dir=\"ltr\">while (rs.next()) {</p><p dir=\"ltr\">//These are the other fields of the Tasks table.</p><p dir=\"ltr\">title_text = rs.getSTring(“TITLE”);</p><p dir=\"ltr\">location_text = rs.getString(“LOCATION”);</p><p dir=\"ltr\">notes_text = rs.getString(“NOTES”);</p><p dir=\"ltr\">}</p><p dir=\"ltr\">rs.close();</p><p dir=\"ltr\">} catch (Exception ex) {</p><p dir=\"ltr\">System.err.println(“Error”);</p><p dir=\"ltr\">}</p><br><p dir=\"ltr\">Now, we fill up the values of the insert page using the data we have just obtained. This will ensure, as in the previous tutorial, that the current data will already be entered when the user clicks on the edit button.</p><br><p dir=\"ltr\">FXMLLoader loader = new FXMLLoader(getClass().getResource(“FXMLDriverPage.fxml”));</p><p dir=\"ltr\">Scene notes_scene = new Scene((Pane) loader.load());</p><p dir=\"ltr\">Stage app_stage = (Stage) ((Node) event.getSource()).getScene().getWindow();</p><p dir=\"ltr\">app_stage.setScene(notes_scene);</p><p dir=\"ltr\">FXMLInsertPageController controller = loader.&lt;FXMLInsertPageController&gt;getController();</p><p dir=\"ltr\">/*The following methods have already been defined in the insert page controller, and their basic function is to set the values of the UI elements to those specified in the variable passed in. */</p><p dir=\"ltr\">controller.setNotes(notes_text);</p><p dir=\"ltr\">controller.setTitle(title_text);</p><p dir=\"ltr\">controller.setLocation(location_text);</p><p dir=\"ltr\">controller.setdatePicker(time_text_year, time_text_month, time_text_day);</p><p dir=\"ltr\">//The hour can be modified, if needed, to accommodate the 24-hour clock.</p><p dir=\"ltr\">controller.setHourMenuButton(time_text_hour);</p><p dir=\"ltr\">controller.setMinuteMenuButton(time_text_minute);</p><p dir=\"ltr\">deleteTask();</p><p dir=\"ltr\">app_stage.show();</p><br><p>The penultimate line is the function call deleteTask(), which was introduced in tutorial #8. The reason we’re doing this is because the page InsertPage already has the functionality to insert, and therefore, in order to put the existing code to use, we just delete the task corresponding to the entry selected, and then ‘re-insert’ the data obtained above. An alternative to this approach (and possibly a more efficient one) would be to simply use the UPDATE SQL statement, which does the editing for us.</p><style>body {\n" +
    "\n" +
    "    }\n" +
    "    ul {\n" +
    "        font-size: 24px;\n" +
    "        padding-right: 10px;\n" +
    "    }\n" +
    "\n" +
    "    p {\n" +
    "        font-size: 24px;\n" +
    "        padding-left: 10px;\n" +
    "        padding-right: 10px;\n" +
    "        text-align: center;\n" +
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


  $templateCache.put('9.html',
    "<p dir=\"ltr\">The objective of this tutorial is to introduce dialog boxes into the app. JavaFX currently does not have an easy way to use dialog boxes, so a good way to use them would be to look up GIT repositories for Java FX dialog boxes online. Workarounds are also possible, and although they aren’t necessarily the prettiest way of implementing them, the following code would work:</p><br><p dir=\"ltr\">Stage dialogStage = new Stage();</p><p dir=\"ltr\">Button okButton = new Button(“Ok”);</p><p dir=\"ltr\">dialogStage.initModality(Modality.WINDOW_MODAL);</p><p dir=\"ltr\">dialogStage.setScene(new Scene(VBoxBuilder.create().children(new Text(“Hi”), okButton).alignment(Pos.CENTER).padding(new Insets(5)).build()));</p><p dir=\"ltr\">dialogStage.show();</p><p dir=\"ltr\">okButton.setOnAction(new EventHandler&lt;ActionEvent&gt;() {</p><p dir=\"ltr\">@Override</p><p dir=\"ltr\">public void handle(ActionEvent event) {</p><p dir=\"ltr\">try {</p><p dir=\"ltr\">Parent date_page_parent = FXMLLoader.load(getClass().getResource(“FXMLHomePage.fxml”));</p><p dir=\"ltr\">Scene date_page_scene = new Scene(date_page_parent);</p><p dir=\"ltr\">Stage app_stage = (Stage)((Node) event.getSource()).getScene().getWindow();</p><p dir=\"ltr\">app_stage.hide();</p><p dir=\"ltr\">app_stage.setScene(date_page_scene);</p><p dir=\"ltr\">}</p><p dir=\"ltr\">catch(IOException e) {</p><p dir=\"ltr\">System.out.println(e.getMessage());</p><p dir=\"ltr\">}</p><p dir=\"ltr\">}</p><p dir=\"ltr\">}</p><br><p>Note that there are several imports necessary to accommodate this, and the Insets class has to be obtained from javafx.geometry.Insets. One would be best advised to look up the Javadocs for each of the lines of code to understand their meaning. The code pattern after the dialog box is created is quite similar to that of a regular button, with a simple handler method to deal with the press of the button in the dialog box.</p><style>body {\n" +
    "\n" +
    "    }\n" +
    "    ul {\n" +
    "        font-size: 24px;\n" +
    "        padding-right: 10px;\n" +
    "    }\n" +
    "\n" +
    "    p {\n" +
    "        font-size: 24px;\n" +
    "        padding-left: 10px;\n" +
    "        padding-right: 10px;\n" +
    "        text-align: center;\n" +
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
