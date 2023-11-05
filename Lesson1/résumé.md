## <h2 style="color:blue; text-align:center;"> MY FIRST TS TUTORIAL</h2>

To begin using typescript, first you need to install it via npm or your favorite package manager.

### tsc --init, to create the tsconfig.json file

After that, you can start writing the code inside a .ts file and then compile it to js(if necesary) using the `JS tsc command.`

### /* Disable emitting files if any type checking errors are reported. */
 // "noEmitOnError": true,            
 You can also use the --noEmitError flag when running the tsc command along with the -w flag.                  

### //Toensure that only the file inside the root directory will be compiled to js file
  "include":[
    "src"
  ]

<h3 style="color:green;">A language that is strongly typed can be  <u>statically</u> OR <u>dynamically</u> typed! </h3>

### <h3 style="color:blue;">TS is a statically typed language. This means types are checked at <i>compile time</i>.</h3>

### <h3 style="color:yellow;">JS is a dynamically typed language. This means types are checked at <i>run time</i>.</h3>

### Union type, it's a way of setting the data type of a var to multiple data type at the same time using the | operator

### Interface vs type : with interface you don't need the equal sign and it's not the case for type


<h3>"unlike most TypeScript features, Enums are nota type-level addition to js but something added to the language and runtime"</h3>

### Type Aliases are just working when using type not interface

`JS   
type mathFunction = (a:number, b:number) => number;

interface mathFunction {
  (a: number, b: number): number;
}

`