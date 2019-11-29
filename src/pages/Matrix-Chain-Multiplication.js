import React from "react"
import { Link } from "gatsby"
// import MatrixCM from '../Codes/MCM'

import Layout from "../components/layout"
import SEO from "../components/seo"

var MatrixCM = "var M, S;\n\nasync function MCM(p) {\n&nbsp;  var n = p.length\n\n&nbsp;  let tmp = new Array(n);\n&nbsp;  M = new Array(n);\n&nbsp;  S = new Array(n);\n\n&nbsp;  for (let i=0;i<n;++i){\n&nbsp;  &nbsp;  M[i] = new Array(n);\n&nbsp;  &nbsp;  S[i] = new Array(n);\n&nbsp;  &nbsp;  for (let j=0;j<n;++j){\n&nbsp;  &nbsp;  &nbsp;  M[i][j] = 0;\n&nbsp;  &nbsp;  &nbsp;  S[i][j] = 0;\n&nbsp;  &nbsp;  }\n&nbsp;  }\n\n&nbsp;  console.table(M);\n\n&nbsp;  for (let l=2;l<n;++l){\n&nbsp;  &nbsp;  for (let i=1;i<(n-l+1);++i){\n&nbsp;  &nbsp;  &nbsp;  let j = l + i - 1;\n&nbsp;  &nbsp;  &nbsp;  M[i][j] = Number.POSITIVE_INFINITY;\n&nbsp;  &nbsp;  &nbsp;  for(let k=i;k<j;++k){\n&nbsp;  &nbsp;  &nbsp;  &nbsp;  let q = M[i][k] + M[k+1][j] + (p[i-1]*p[k]*p[j]);\n&nbsp;  &nbsp;  &nbsp;  &nbsp;  // console.table(M);\n&nbsp;  &nbsp;  &nbsp;  &nbsp;  // console.log(\"i\"+ i + \"j\" + j + \"q = \" + q)\n&nbsp;  &nbsp;  &nbsp;  &nbsp;  if (q < M[i][j]){\n&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  M[i][j] = q;\n&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  S[i][j] = k;\n&nbsp;  &nbsp;  &nbsp;  &nbsp;  }\n&nbsp;  &nbsp;  &nbsp;  }\n&nbsp;  &nbsp;  }\n&nbsp;  }\n}\n\nasync function PrintMCS (i,j){\n&nbsp;  if(i == j){\n&nbsp;  &nbsp;  process.stdout.write(\"A\" + i);\n&nbsp;  }\n&nbsp;  else {\n&nbsp;  &nbsp;  process.stdout.write('(');\n&nbsp;  &nbsp;  await PrintMCS(i,S[i][j]);\n&nbsp;  &nbsp;  await PrintMCS(S[i][j]+1, j);\n&nbsp;  &nbsp;  process.stdout.write(')');\n&nbsp;  }\n}\n\n(async () => {\n&nbsp;  var p = [1,2,3,4];\n&nbsp;  await MCM(p);\n&nbsp;  console.table(M);\n&nbsp;  console.table(S);\n&nbsp;  await PrintMCS(0,3);\n})();\n"

const MCM = () => (
  <Layout>
    <SEO title="Matric Chain Multiplication" />
    <h1>This is MAtrix Chain Multiplication Problem</h1>
    {
        MatrixCM.split("\n").map((i,key) => {
            return <div key={key} dangerouslySetInnerHTML={{__html: i}}></div>;
        })
    }
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MCM
