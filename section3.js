//----------------------------------------------------------------------------------------
//          creating a new flutter project from scratch
//----------------------------------------------------------------------------------------

/*
> using widget tree we have built an hello-world app.

import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Center(
        child: Text('Hello-world'),
      ),
    ),
  );
}
*/

//----------------------------------------------------------------------------------------
//                               Scaffolding a flutter app
//----------------------------------------------------------------------------------------

/* in udemy 

> import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(),
      appBar: AppBar(
        title: Text('I am Rich'),
      ),
    ),
  );
}

--------------------------------------
> in geeksforgeeks

import 'package:flutter/material.dart';

void main() {
  runApp(gfgApp()); //MaterialApp
}

MaterialApp gfgApp() {
  return MaterialApp(
    home: Scaffold(
        appBar: AppBar(
      title: const Text('I am rich'),
    ) //Text
        ), // center
    //Scaffold
  );
}
------------------------------------------
> to change the background-color 
import 'package:flutter/material.dart';

void main() {
  runApp(gfgApp()); //MaterialApp
}

MaterialApp gfgApp() {
  return MaterialApp(
    home: Scaffold(
        appBar: AppBar(
      title: const Text('I am rich'),
      backgroundColor: Colors.blueGrey[900],
    ) //Text
        ), // center
    //Scaffold
  );
}
------------------------------------------------------------

> to change background color of entire scaffold except app bar

MaterialApp gfgApp() {
  return MaterialApp(
    home: Scaffold(
        backgroundColor: Colors.blueGrey,
        appBar: AppBar(
          title: const Text('I am rich'),
          backgroundColor: Colors.blueGrey[900],
        ) //Text
        ), // center
    //Scaffold
  );
}
---------------------------------------------------------------

> to insert image(at center)

import 'package:flutter/material.dart';

void main() {
  runApp(gfgApp()); //MaterialApp
}

MaterialApp gfgApp() {
  return MaterialApp(
    home: Scaffold(
        backgroundColor: Colors.blueGrey,
        appBar: AppBar(
          title: const Text('I am rich'),
          backgroundColor: Colors.blueGrey[900],
        ),
        body: Center(
          child: Image(
            image: NetworkImage(
                'https://cdn.vox-cdn.com/thumbor/Grh5-O7XLQHxsyUZkJ7VXHdiK64=/0x0:1024x1024/1075x1075/filters:focal(294x637:456x799):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71200197/James_Vincent_a_robot_steam_engine_barrelling_down_the_tracks_a_b833cc93_f145_4e23_8754_6535f2b7cd92.0.png'),
          ),
        )
        //Text
        ), // center
    //Scaffold
  );
}


//----------------------------------------------------------------------------------------
//                               Add app icon to android apps
//----------------------------------------------------------------------------------------


note : how to add downloaded images from pc to flutter?
www.drawio.com => to draw images
how to change app icon?
using app icon generator

*/