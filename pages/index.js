import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
    <Layout>
        <section className="text-center">
            <h1 className="mb-5">Welcome to the Pokémon GO Sydney City Discord Community</h1>
            <p>We are on a mission to create a friendly and happy Pokémon GO community in the Sydney City area and am thrilled to have you want to join us.</p>
            <p>Before joining our community, please take a moment to read the <Link href="/rules"><a aria-label="rules">#rules</a></Link> to avoid being banned.</p>
            <p>For information about the area our community covers and which gyms to <strong>Raid</strong> for a chance to receive an <strong>EX Raid pass</strong> invite, see <Link href="/info"><a aria-label="info">#info</a></Link>.</p>
            <p>Finally, in order to access all the channels on our Discord server, you will need to set your team. See #set-your-team channel on Discord server for further instructions.</p>
            <p>That's all folks. Should you decide to join us, welcome and see you around!</p>
            <p><strong>&ndash; Team Rainbow Rocket.</strong></p>
        </section>
    </Layout>
)