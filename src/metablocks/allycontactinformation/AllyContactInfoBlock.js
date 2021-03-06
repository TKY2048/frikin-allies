/**
 * BLOCK: frikin-block-event-additional-info
 * Registering a basic block with Gutenberg.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import IconCalendar from '../../icons/IconCalendar';
import IconRetail from '../../icons/IconReatilSpace';
import IconLink from '../../icons/IconLink';

const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: a Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('frik-in/ally-contact-info', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('Ally - Contact Info'), // Block title.
    icon: 'calendar-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    /*
        supports: {
        align: ['full'],
    }, */
    attributes: {
        'website': {
            type: 'text',
            source: 'meta',
            meta: 'website'
        },
        'representative-name': {
            type: 'text',
            source: 'meta',
            meta: 'representative-name'
        },
        'representative-phone': {
            type: 'text',
            source: 'meta',
            meta: 'representative-phone'
        },
        'representative-email': {
            type: 'text',
            source: 'meta',
            meta: 'representative-email'
        },
        'representative-twitter': {
            type: 'text',
            source: 'meta',
            meta: 'representative-twitter'
        },
        'representative-facebook': {
            type: 'text',
            source: 'meta',
            meta: 'representative-facebook'
        },
        'other-info': {
            type: 'text',
            source: 'meta',
            meta: 'other-info'
        },

        /*
        align: {
            default: 'full',
            type: 'string',
        },*/
    },
    keywords: [
        __('Social'),
        __('Ally'),
        __('Frik-in'),
        __('redes sociales'),
        __('social networks'),
    ],

    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */

    edit: class extends React.Component {
        // Creates a <p class='wp-block-frik-in-social-networks'></p>.
        constructor(props) {
            super(...arguments);
            this.props = props;
            this.attributes = props.attributes;
            this.setAttributes = props.setAttributes;
            this.state = {
                //Attributes
                website: this.attributes['website'] ? this.attributes['website'] : null,
                name: this.attributes['representative-name'] ? this.attributes['representative-name'] : null,
                phone: this.attributes['representative-phone'] ? this.attributes['representative-phone'] : null,
                email: this.attributes['representative-email'] ? this.attributes['representative-email'] : null,
                twitter: this.attributes['representative-twitter'] ? this.attributes['representative-twitter'] : null,
                facebook: this.attributes['representative-facebook'] ? this.attributes['representative-facebook'] : null,
                other: this.attributes['other-info'] ? this.attributes['other-info'] : null
            };
        }

        render() {
            //EDITOR RETURN
            return <div className={this.props.className}>
                <div>
                    <label htmlFor="name">{__('Nombre del Representante', 'frikin-allies')} </label>
                    <input value={this.state.name}
                           type="text" id="name"
                           onChange={event => {
                               this.setState({name: event.target.value});
                               this.setAttributes({'representative-name': event.target.value});
                           }}
                    />

                    <label htmlFor="phone">{__('Teléfono del Representante', 'frikin-allies')} </label>
                    <input value={this.state.phone}
                           type="text" id="phone"
                           onChange={event => {
                               this.setState({phone: event.target.value});
                               this.setAttributes({'representative-phone': event.target.value});
                           }}
                    />

                    <label htmlFor="email">{__('Email del Representante', 'frikin-allies')} </label>
                    <input value={this.state.email}
                           type="text" id="email"
                           onChange={event => {
                               this.setState({email: event.target.value});
                               this.setAttributes({'representative-email': event.target.value});
                           }}
                    />
                </div>
                <div>
                    <label htmlFor="website">{__('Sitio Web del Representante', 'frikin-allies')} </label>
                    <input value={this.state.website}
                           type="text" id="webiste"
                           onChange={event => {
                               this.setState({website: event.target.value});
                               this.setAttributes({'website': event.target.value});
                           }}
                    />

                    <label htmlFor="facebook">{__('Facebook del Representante', 'frikin-allies')} </label>
                    <input value={this.state.facebook}
                           type="text" id="facebook"
                           onChange={event => {
                               this.setState({facebook: event.target.value});
                               this.setAttributes({'representative-facebook': event.target.value});
                           }}
                    />

                    <label htmlFor="email">{__('Twitter del Representante', 'frikin-allies')} </label>
                    <input value={this.state.twitter}
                           type="text" id="twitter"
                           onChange={event => {
                               this.setState({twitter: event.target.value});
                               this.setAttributes({'representative-twitter': event.target.value});
                           }}
                    />

                    <label htmlFor="other"> {__('Otros', 'frikin-allies')} </label>
                    <input value={this.state.other}
                           type="text" id="other"
                           onChange={event => {
                               this.setState({other: event.target.value});
                               this.setAttributes({'other-info': event.target.value});
                           }}
                    />
                </div>
            </div>
        }
    },

    /**
     * The save function defines the way in which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into post_content.
     *
     * The "save" property must be specified and must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    save: function (props) {
        return null;
    },
});
