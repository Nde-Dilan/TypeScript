## My first typescript tutorial ...

To begin using typescript, first you need to install it via npm or your favorite package manager.

After that, you can start writing the code inside a .ts file and then compile it to js(if necesary) using the `JS tsc command.`

### /* Disable emitting files if any type checking errors are reported. */
 // "noEmitOnError": true,            
 You can also use the --noEmitError flag when running the tsc command along with the -w flag.                  

### //Toensure that only the file inside the root directory will be compiled to js file
  "include":[
    "src"
  ]

<h3 style="color:red;">A language that is strongly typed can be  statically OR dynamically typed! </h3>

### <h3 style="color:blue;">TS is a statically typed language. This means types are checked at <i>compile time</i>.</h3>

### <h3 style="color:yellow;">JS is a dynamically typed language. This means types are checked at <i>run time</i>.</h3>