import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
    <Layout>
        <section>
            <h1>FAQ</h1>
            <p>We get asked a bunch of common questions whenever someone joins or wants to join our community. So we have put together this FAQ, enjoy!</p>
            <dl>
                <dt>Why create a new group when there're already other groups covering the Sydney City area</dt>
                <dd>Three quick reasons:
                    <ul>
                        <li>Sydney is <em>big</em>. <span className="text-muted">For example, if you are in the City, you probably do not care that someone out in Hurstville came across a Snorlax at Hurstville Train Station.</span></li>
                        <li>Not everyone uses Facebook, Facebook Messenger, WhatsApp, etc.</li>
                        <li>Services such as Facebook, Facebook Messenger and WhatsApp requires players to share their real identities with others, some may not be comfortable with this.</li>
                    </ul>
                    <p>You may also like to read the <Link href="/info#motivation"><a>motivation</a></Link> behind why we created this community.</p>
                </dd>
                <dt>How do I get/obtain an EX Raid pass</dt>
                <dd>
                    <p>There is no guaranteed way to obtain an EX Raid pass. EX Raid pass invites are distributed out solely at Niantic's discretion.</p>
                    <p>However, in order to be on the list of potential invitees, you will need to Raid at an EX eligible gym. See <Link href="/info#ex-gyms"><a>EX eligible gyms</a></Link> on the <Link href="/info"><a>info</a></Link> page for a list of EX eligible gyms within our coverage area.</p>
                </dd>
                <dt>What exact areas does this community cover</dt>
                <dd>
                    <p>We cover what we believe are the main areas that make up the Sydney City area. For specific details, see <Link href="/info#coverage-area"><a>coverage area</a></Link> on the <Link href="/info"><a>info</a></Link> page.</p>
                </dd>
                <dt>What can I expect to get out of joining this community</dt>
                <dd>
                    <p>This will greatly depend on each person. However, the minimum you could expect is a safe forum for you to ask questions and find the latest confirmed news regarding Pokémon Go.</p>
                    <p>There are no lock-in contracts or hidden traps. You are free to leave whenever you wish, so why not take a look around for yourself.</p>
                </dd>
                <dt>How are you guys preventing spoofers from snooping on the shared info</dt>
                <dd>
                    <p>Nothing. Absolutely nothing. How someone chooses to play is their choice. Whether they get banned or not is also not our concern.</p>
                    <p>However, as good citizens of the Pokémon Go community and to avoid heated arguments, we will <strong>not</strong> allow discussion of spoofing, in particular - asking how-to spoof/bot or for coordinates.</p>
                    <p><em>If you are unable to put this aside, then this may not be the right community for you.</em></p>
                </dd>
                <dt>Can I invite others</dt>
                <dd>
                    <p>Certainly. The more, the merrier.</p>
                    <p>Though you can send direct invites, our recommended approach is to direct them to this website and let them decide for themselves whether they want to join or not.</p>
                </dd>
                <dt>Will Niantic ban me for being a part of this community</dt>
                <dd>
                    <p>Highly unlikely. We are merely a forum to facilitate communication between players.</p>
                </dd>
                <dt>Do I need to know and/or meet others to be part of this community</dt>
                <dd>
                    <p>Absolutely not.</p>
                    <p>There are no requirements to join our community. As long as you have access to <a href="https://discordapp.com" target="_blank">Discord</a>, you can join. Though an open mind and a love for sharing certainly won't hurt. Just don't be one of those <a href="https://i.imgflip.com/lh1o4.jpg" target="_blank">TMI</a> ppl.</p>
                </dd>
            </dl>
        </section>
    </Layout>
)