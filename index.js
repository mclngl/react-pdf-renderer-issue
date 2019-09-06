const React = require("react");
const ReactPDF = require("@react-pdf/renderer");

const { Document, Text, Page } = ReactPDF;

function hello() {
  React.useEffect(() => {
    console.log("wewe");
  }, []);

  return React.createElement(
    Document,
    null,
    React.createElement(Page, null, React.createElement(Text, null, "hdllo "))
  );
}

ReactPDF.render(hello(), `${__dirname}/testing.pdf`);
