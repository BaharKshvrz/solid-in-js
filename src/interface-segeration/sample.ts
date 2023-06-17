function getInfo(firstName: string, lastName: string, greetStr: string){
    return `${greetStr}, I am ${firstName} ${lastName}.`
  }

  function getId(empid: string, greetStr: string){
    return `${greetStr}, my employee id is ${empid}.`;
  }

  function CreatePerson(fn: string, ln: string){
    return {
      firstName: fn,
      lastName: ln,
      getInfo: (greetStr: string) => getInfo(fn, ln, greetStr) 
    };
  }

  function CreateEmployee(fn: string, ln: string, empid: string){
    return {
      empid: empid,
      getId : (greetStr: string) => getId(empid, greetStr),
      getInfo: (greetStr: string) => getInfo(fn, ln, greetStr) 
    };
  }
  
  var e1 = CreateEmployee('john', 'doe', "123");
  console.log( e1.getInfo('Hi') ); // Hi, I am John Doe.
  console.log( e1.getId('Hello') ); // Hello, my employee id is 123.