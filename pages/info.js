import Layout from '../components/Layout'

export default () => (
    <Layout>
        <section className="pb-3">
            <h1 className="text-uppercase">Info</h1>
            <p>We, Pokémon GO Sydney City, are a community of Pokémon GO fans playing together to create a friendly and happy Pokémon GO community in the Sydney City area. <strong>We are not affiliated with the Pokemon GO Sydney Facebook group or any other group with the same/similar name</strong>. We operate solely via our Discord server and have no intentions to operate on any other platform(s).</p>
            <p>We welcome collaborations with other Pokémon GO groups/communities, feel free to reach out to us on our Discord server.</p>
        </section>
        <section id="motivation" className="pb-3">
            <h2 className="h3 text-uppercase">Motivation</h2>
            <p>Inspired by Brandon Tan in Trainer Tips' YouTube video <a href="https://www.youtube.com/watch?v=Eb0BvnoxTwA" target="_blank">50 Raids in one day with the world's #1 Pokémon GO Player</a>. We decided to create a <em>similar</em> community for Sydney.</p>
            <p>An inclusive Pokémon GO community where players from all walks of life can get together to help one another enjoy Pokémon GO even more by sharing sightings and tips, organising group raids and gatherings. Or just to catch up on the latest news.</p>
            <small>Note: We are not a Raid group looking to up everyone's game like Brandon Tan in the video. While we encourage our members to organise and/or join Raids other members in the community organises. Our role as Adminstrators of the Discord community is to oversee the Discord server and not to facilitate daily Raids or organise regular meetups.</small>
        </section>
        <section id="coverage-area">
            <h2 className="h3 text-uppercase">Coverage Area</h2>
            <p>Sydney is a <em>big</em> place, so below is an image of a map outlining the areas our community covers:</p>
            <figure>
                <img src="/static/pogo-sydney-city-coverage-map.png" alt="Pokemon Go Sydney City Coverage Map" className="img-fluid" />
                <figcaption className="pt-2">
                    <p className="mb-0">The names of the areas located within the image above are:</p>
                    <ul className="pl-3 row no-gutters">
                        <li className="col-6 col-md-4">Sydney City (CBD)</li>
                        <li className="col-6 col-md-4">Pyrmont</li>
                        <li className="col-6 col-md-4">Dawes Point</li>
                        <li className="col-6 col-md-4">Barangaroo</li>
                        <li className="col-6 col-md-4">The Rocks</li>
                        <li className="col-6 col-md-4">Royal Botanical Gardens</li>
                        <li className="col-6 col-md-4">Haymarket</li>
                        <li className="col-6 col-md-4">Central</li>
                    </ul>
                </figcaption>
            </figure>
        </section>
        <section id="ex-gyms" className="pb-3">
            <h2 className="h3 text-uppercase">EX Eligible gyms</h2>
            <p className="mb-0">Below is a list of gyms within our community's coverage area that are known to host EX Raids:</p>
            <ul className="pl-3">
                <li><a href="https://goo.gl/maps/4u5CNyJfMcF2" target="_blank">Lower Battery</a> (Dawes Point)</li>
                <li><a href="https://goo.gl/maps/osbUXwDK9pB2" target="_blank">Hans Christian Andersen</a> (Sydney Observatory)</li>
                <li><a href="https://goo.gl/maps/dJ4XqvZQ8em" target="_blank">The Beacon</a> (Circular Quay)</li>
                <li><a href="https://goo.gl/maps/Wd5DgoGwZsL2" target="_blank">Sydney Obelisk</a> (Circular Quay)</li>
                <li><a href="https://goo.gl/maps/nuCNPVgcDds" target="_blank">Relaxing Statue</a> (Domain)</li>
                <li><a href="https://goo.gl/maps/9HDVjaZ5DWs" target="_blank">Mobius Sea by Richard Goodwin</a> (Domain)</li>
                <li><a href="https://goo.gl/maps/36bwUBhTrTC2" target="_blank">Pirrama Park</a> (Pyrmont)</li>
                <li><a href="https://goo.gl/maps/MmsMJfv4DhD2" target="_blank">Paradise Reserve</a> (Pyrmont)</li>
                <li><a href="https://goo.gl/maps/aM6kc8SaFzA2" target="_blank">Prince Alfred Park <em>Eastern Entrance</em></a> (Central)</li>
            </ul>
            <p>To see all the gyms and pokestops within our coverage area, see our <a href="https://www.google.com/maps/d/viewer?mid=1nu6kBCROyiYMHfFKnjypKy9IuIwFNsjv" target="_blank">Coverage Map</a>.</p>
        </section>
    </Layout>
)