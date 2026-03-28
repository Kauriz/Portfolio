{include file="_partials/header.tpl"}

<div class="container">
    {block name="sidebar"}
        <div class="sidebar">
            <h3>Projets</h3>
            <ul>
                <li class="tag">
                    <h4>E-Chat</h4>
                </li>
            </ul>
        </div>
    {/block}
    <main>
        {block name="content"}
            <div id="viewport">
                <div id="content" >
                    <div style="width:150px; height:100px; background:red; position:absolute; top:300px; left:400px;">
                        Bloc 1
                    </div>
                    <div style="width:150px; height:100px; background:blue; position:absolute; top:600px; left:800px;">
                        Bloc 2
                    </div>
                </div>
            </div>

            <script src="https://unpkg.com/@panzoom/panzoom@4.4.0/dist/panzoom.min.js"></script>
            <script>
                document.addEventListener('DOMContentLoaded', () => {
                    const elem = document.getElementById('content');
                    const panzoom = Panzoom(elem, {
                        contain: 'outside',
                        maxScale: 5,
                        minScale: 0.1
                    });

                    document.getElementById('viewport').addEventListener('wheel', panzoom.zoomWithWheel);
                });
            </script>

        {/block}
    </main>
</div>

{block name="popup"}
{/block}

{include file="_partials/footer.tpl"}