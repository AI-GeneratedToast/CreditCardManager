package com.eazybytes.cards.repository;

import java.util.List;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.eazybytes.cards.model.Cards;

@Repository
public interface CardsRepository extends CrudRepository<Cards, Integer> {
	
	List<Cards> findByCustomerId(int customerId);
	
	Cards findByCardNumber(String cardNumber);

	Cards findByCardId(int cardIds);
	
	List<Cards> findByCardType(String cardType);
}
