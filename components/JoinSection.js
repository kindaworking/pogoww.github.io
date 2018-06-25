import Link from 'next/link'

export default () => (
    <section className="text-center pt-3">
        <img src="/static/pogo-sydney-city-logo.png" alt="Pokemon GO Sydney City logo" className="img-fluid" />
        <div className="mb-3">
            <a href="https://discord.gg/wPEP5Dq" target="_blank" className="btn btn-primary text-uppercase btn-lg px-5">Join</a>
            <hr />
            <code>https://discord.gg/wPEP5Dq</code>
        </div>
        <small>By joining, you <em>acknowledge</em> you have <strong>read</strong> &amp; <strong>agreed</strong> to adhere to the <Link href="/rules"><a aria-label="rules">#rules</a></Link> governing our community.</small>
    </section>
)