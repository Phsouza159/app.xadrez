<%-- 
    Document   : tabuleiroReferenciaA
    Created on : 08/08/2019, 01:58:25
    Author     : paulo-pc
--%>
<%@page import="xadrez.xadrezApp"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!-- TABULEIRO CABECALHO TOP -->
<li class="linha-area">
    
    <section class="campo-linha marcao-cabecalho-top marcao-cabecalho-bottom">
        ◘
    </section>

    <%  for (int i = 1; i <= xadrezApp._ROWS.length; i++) {  %>
        <section class="campo-linha marcao-cabecalho-top">
            <%= i %>
        </section>
    <% }%>

    <section class="campo-linha marcao-cabecalho-top marcao-cabecalho-bottom">
        ◘
    </section>

</li>