<%-- 
    Document   : tabuleiroCampo
    Created on : 08/08/2019, 02:27:14
    Author     : paulo-pc
--%>
<%@page import="xadrez.xadrezApp"%>
<%@page import="javax.xml.bind.DatatypeConverter"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%
  String[] _ROWS =  xadrezApp._ROWS;
  
  String sentinela = request.getParameter("sentinela");
  int i = DatatypeConverter.parseInt(sentinela);

%>

<!-- TABULEIRO CAMPO ITENS -->
<%  for (int j = 1; j <= _ROWS.length; j++) {  %>
<%
    String classBg = "";
    String classId = _ROWS[i] + "" + j;
    String classesInsert = "";
    if (i % 2 == 0) {
        classBg = j % 2 == 0 ? "bg-white" : "bg-tabuleiro";
    } else {
        classBg = j % 2 == 0 ? "bg-tabuleiro" : "bg-white";
    }

    classesInsert = classBg + " " + classId;
%>

<!-- CAMPO -->
<section class="campo-linha <%= classesInsert%>">
    <%= classId%>
</section>

<% }%>