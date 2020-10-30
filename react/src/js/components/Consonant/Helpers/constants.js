/**
 * Minimal viewport width to fit desktops/laptops
 * @type {Number}
 */
export const DESKTOP_MIN_WIDTH = 1200;

/**
 * Minimal viewport width to fit tablets
 * @type {Number}
 */
export const TABLET_MIN_WIDTH = 768;

/**
 * Maximum allowed top filters displayed quantity
 * before "Load more" button
 * @type {Number}
 */
export const MAX_TRUNCATED_FILTERS = 3;

/**
 * Minimum top filters quantity to display blurred effect
 * on filters wrapper
 * @type {Number}
 */
export const MIN_FILTERS_SHOW_BG = 3;

/**
 * Maximum allowed card description length
 * after which a truncation will take place
 * @type {Number}
 */
export const TRUNCATE_TEXT_QTY = 200;

/**
 * Quantity of the pagination items to display
 * on the mobile and desktop breakpoints
 * @type {Object}
 */
export const PAGINATION_COUNT = {
    DESKTOP: 10,
    MOBILE: 4,
};

/**
 * Available filtering types
 * @type {Object}
 */
export const FILTER_TYPES = {
    AND: 'and',
    OR: 'or',
    XOR: 'xor',
};

/**
 * Available filter panel types
 * @type {Object}
 */
export const FILTER_PANEL = {
    LEFT: 'left',
    TOP: 'top',
};

/**
 * Available sorting types
 * @type {Object}
 */
export const SORT_TYPES = {
    DATEASC: 'dateasc',
    DATEDESC: 'datedesc',
    FEATURED: 'featured',
    TITLEASC: 'titleasc',
    TITLEDESC: 'titledesc',
};

/**
 * Available infobit types
 * @type {Object}
 */
export const INFOBIT_TYPE = {
    PRICE: 'price',
    BUTTON: 'button',
    ICON_TEXT: 'icon-with-text',
    LINK_ICON: 'link-with-icon',
    TEXT: 'text',
    ICON: 'icon',
    LINK: 'link',
    PROGRESS: 'progress-bar',
    RATING: 'rating',
    BOOKMARK: 'bookmark',
    DATE: 'date-interval',
};

/**
 * Default authoring constants
 * @type {Object}
 */
export const DEFAULT_CONFIG = {
    collection: {
        resultsPerPage: 9,
        endpoint: '',
        title: '',
        totalCardLimit: -1,
        cardStyle: 'none',
        displayTotalResults: true,
        totalResultsText: '{} results',
        i18n: {
            prettyDateIntervalFormat: '{LLL} {dd} | {timeRange} {timeZone}',
            totalResultsText: '{total} results',
            title: '',
            onErrorTitle: 'Sorry there was a system error.',
            onErrorDescription: 'Please try reloading the page or try coming back to the page another time.',
        },
    },
    featuredCards: [],
    header: {
        enabled: false,
    },
    filterPanel: {
        enabled: true,
        type: 'left',
        filters: [],
        clearAllFiltersText: 'Clear all',
        clearFilterText: 'Clear',
        filterLogic: 'and',
        leftPanelHeader: 'Refine the results',
        topPanel: {
            mobile: {
                blurFilters: true,
            },
        },
    },
    sort: {
        enabled: true,
        defaultSort: 'featured',
        options: [],
    },
    pagination: {
        enabled: true,
        type: 'loadMore',
        paginatorQuantityText: 'Showing {}-{} of {} Results',
        paginatorPrevLabel: 'Previous',
        paginatorNextLabel: 'Next',
        loadMoreButtonText: 'Load more',
        loadMoreQuantityText: '{} of {} displayed',
    },
    bookmarks: {
        enabled: true,
        bookmarkOnlyCollection: false,
        cardSavedIcon: '',
        cardUnsavedIcon: '',
        selectBookmarksIcon: '',
        unselectBookmarksIcon: '',
        saveCardText: 'Save card',
        unsaveCardText: 'Unsave card',
        bookmarksFilterTitle: 'My favorites',
    },
    search: {
        enabled: true,
        inputPlaceholderText: 'Search here...',
        leftPanelTitle: 'Search',
        searchFields: [
            'title',
            'description',
        ],
        i18n: {
            noResultsTitle: 'No results found',
            noResultsDescription: `We couldn’t find any results for your {query}.{break}
            Check your spelling or try broadening your search.`,
        },
    },
    language: 'en',
};

/**
 * Default quantity of the cards to display on the page
 * @type {Number}
 */
export const DEFAULT_SHOW_ITEMS_PER_PAGE = 8;

/**
 * Available card types
 * @type {Object}
 */
export const CARD_STYLES = {
    WIDE: '3:2',
    SQUARE: '1:1',
    FULL: 'full-card',
};

/**
 * Available loader sizes
 * @type {Object}
 */
export const LOADER_SIZE = {
    MEDIUM: 'medium',
    BIG: 'big',
};
