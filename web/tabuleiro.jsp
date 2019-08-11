<%-- 
    Document   : tabuleiro
    Created on : 07/08/2019, 23:49:53
    Author     : paulo-pc
--%>
<%@page import="xadrez.xadrezApp"%>
<%@page import="com.sun.xml.rpc.processor.modeler.j2ee.xml.string"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>

        <link rel="stylesheet" href="./assets/css/xadrez.app.css"/>
    </head>
    <body>
        
        <section class="app-xadrez">
            <ul class="bordar-tabuleiro" >
                <%-- TABULEIRO CABECALHO TOP  --%>
               <!-- <jsp:include page="./WEB-INF/partialViews/tabuleiroReferenciaA.jsp" />
               

                <!-- TABULEIRO -->
                <%  for (int i = 0; i < xadrezApp._ROWS.length; i++) {  %>

                <li class="linha-area">

                    <%-- TABULEIRO CABECALHO LATERAL --%>
                    <jsp:include page="./WEB-INF/partialViews/tabuleiroReferenciaB.jsp">
                        <jsp:param name="sentinela" value="<%= xadrezApp._ROWS[i] %>" />
                    </jsp:include>
                   

                    <!-- TABULEIRO CAMPO ITENS -->
                    <jsp:include page="./WEB-INF/partialViews/tabuleiroCampo.jsp">
                        <jsp:param name="sentinela" value="<%= i %>" />
                    </jsp:include>
                    
                     <%-- TABULEIRO CABECALHO BAIXO --%>
                    <jsp:include page="./WEB-INF/partialViews/tabuleiroReferenciaB.jsp">
                        <jsp:param name="sentinela" value="<%= xadrezApp._ROWS[i] %>" />
                    </jsp:include>
                     
                </li>         

                <% }%>

                <%-- TABULEIRO CABECALHO BAIXO  --%>
                <jsp:include page="./WEB-INF/partialViews/tabuleiroReferenciaA.jsp" />
                
            </ul>
            
        </section>
            
        <script src="./assets/js/build/main.build.js"></script>    
    </body>
</html>
