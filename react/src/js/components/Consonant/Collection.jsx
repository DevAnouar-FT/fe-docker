import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const DEFAULT_SHOW_ITEMS_PER_PAGE = 8;

const Collection = (props) => {
    const {
        showItemsPerPage,
        pages,
        allowBookmarking,
        onCardBookmark,
        cardBookmarkIcon,
    } = props;
    let cards = [...props.cards];
    let cardsToShow = showItemsPerPage * pages;

    if (cardsToShow > cards.length) cardsToShow = cards.length;
    if (cards.length > cardsToShow) cards = cards.slice(0, cardsToShow);

    return (
        <div className="consonant-card-collection">
            {cards.map(card => (
                <Card
                    key={card.id}
                    {...card}
                    onClick={onCardBookmark}
                    bookmarkIcon={cardBookmarkIcon}
                    allowBookmarking={allowBookmarking} />
            ))}
            <div className="consonant-card consonant-card_placeholder" />
            <div className="consonant-card consonant-card_placeholder" />
        </div>
    );
};

export default Collection;

Collection.propTypes = {
    showItemsPerPage: PropTypes.number,
    pages: PropTypes.number,
    cards: PropTypes.arrayOf(PropTypes.object),
    allowBookmarking: PropTypes.bool.isRequired,
    onCardBookmark: PropTypes.func.isRequired,
    cardBookmarkIcon: PropTypes.string.isRequired,
};

Collection.defaultProps = {
    showItemsPerPage: DEFAULT_SHOW_ITEMS_PER_PAGE,
    pages: 1,
    cards: [],
};
