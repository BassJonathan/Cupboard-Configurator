<template>
<div>
    <h1>Test für Bootstrap</h1>
    <p>Dieser Test ist ein Proof-Of-Concept oder kurz POC!</p>
    <p>Die auf dieser Seite dargestellten Features dienen der Demonstration von Features und stellen eine korrekte Entwicklung sicher.</p>
    <hr>
    <br>
    <p>For example, <code>&lt;section&gt;</code> should be wrapped as inline.</p>
    <br>
    <p>To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
    To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd></p>
    <br>


    <div class="m-4">
        <div class="btn-group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Primary</button>
            <div class="dropdown-menu">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Another action</a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">Separated link</a>
            </div>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">Secondary</button>
            <div class="dropdown-menu">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Another action</a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">Separated link</a>
            </div>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">Success</button>
            <div class="dropdown-menu">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Another action</a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">Separated link</a>
            </div>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown">Info</button>
            <div class="dropdown-menu">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Another action</a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">Separated link</a>
            </div>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">Warning</button>
            <div class="dropdown-menu">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Another action</a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">Separated link</a>
            </div>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown">Danger</button>
            <div class="dropdown-menu">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Another action</a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">Separated link</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'bootstrap test'

}
</script>

<style>
h1 {
    font-size: 5vw;
}
.btn-group {
    padding: 0 5px;
}
</style>