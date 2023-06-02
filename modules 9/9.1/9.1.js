//9.1.1
const parser = new DOMParser();

const xmlString = `
   <list>
      <student>
         <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
         </name>
         <age>35</age>
         <prof>teacher</prof>
      </student>
      <student>
         <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
         </name>
         <age>58</age>
         <prof>driver</prof>
      </student>
   </list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentNode = xmlDOM.querySelectorAll("student");
for (let i = 0; i < studentNode.length; i++) {
   const nameNode = studentNode[i].querySelector("name");
   const firstNode = nameNode.querySelector("first").textContent;
   const secondNode = nameNode.querySelector("second").textContent;
   const ageNode = studentNode[i].querySelector("age").textContent;
   const profNode = studentNode[i].querySelector("prof").textContent;

   const langAttr = nameNode.getAttribute("lang");

   const result = {
      list: [
         {
            name: firstNode + " " + secondNode,
            age: ageNode,
            prof: profNode,
            lang: langAttr   
         }
      ]
   };
   
   console.log('result', result);
}

//9.1.2
const jsonString = `{
   "list": [
      {
         "name": "Petr",
         "age": "20",
         "prof": "mechanic"
      },
      {
         "name": "Vova",
         "age": "60",
         "prof": "pilot"
      }
   ]
}`;

const data = JSON.parse(jsonString);
const list = data.list;

for (let i = 0; i < list.length; i++) {
   const result = {
      name: list[i].name,
      age: Number(list[i].age),
      prof: list[i].prof
   };
   
   console.log('result',result);
};
