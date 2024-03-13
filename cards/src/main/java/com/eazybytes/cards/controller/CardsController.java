/**
 * 
 */
package com.eazybytes.cards.controller;

import java.util.List;

import com.eazybytes.cards.service.CardService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import com.eazybytes.cards.model.Cards;
import com.eazybytes.cards.model.Customer;
import com.eazybytes.cards.repository.CardsRepository;

/**
 * @author Eazy Bytes
 *
 */

@RestController
public class CardsController {

	@Autowired
	private CardService cardService;


	@Operation(summary = "get card by id")
	@GetMapping("/myCard/{id}")
	public Cards getCardDetails(@PathVariable("id") int id) {
		return cardService.getCardById(id);
	}


	@Operation(summary = "get all cards")
	@GetMapping("/AllCards")
	public List<Cards> getAllCards(){
		return cardService.getAllCards();
	}

	@Operation(summary = "create a new card")
	@PostMapping("/newCard")
	public String newCard(@RequestBody Cards card){
		return cardService.saveCard(card);
	}

	@Operation(summary = "update card by id")
	@PutMapping("/update/{id}")
	public String updateCard(@PathVariable("id") int id, @RequestBody Cards updateCard) {
		return cardService.updateCard(id, updateCard);
	}

	@Operation(summary = "delete card by id")
	@DeleteMapping("/deleteCard/{id}")
	public String deleteCard(@PathVariable("id") int id){
		return cardService.deleteCard(id);
	}
	
	@Operation(summary = "delete card by card number")
	@DeleteMapping("/deleteCardByNumber/{cardNumber}")
	public String deleteCardByNumber(@PathVariable String cardNumber) {
		return cardService.deleteByCardNumber(cardNumber);
	}
	
	@Operation(summary = "delete all cards related to a customerId")
	@DeleteMapping("/deleteCardsByCustomerId/{id}")
	public List<String> deleteCardsByCustomerId(@PathVariable int id) {
		return cardService.deleteCardsByCustomersId(id);
	}
	
	@Operation(summary = "delete multiple by id")
	@DeleteMapping("/deleteMultipleCards")
	public List<String> deleteMultipleCards (@RequestBody List<Integer> cardIds){
		return cardService.deleteMultipleCards(cardIds);
	}
	
	@Operation(summary = "modify card limit by id")
	@PutMapping("/updateCardLimit/{cardId}")
	public String updateCardLimit(@PathVariable int cardId,@RequestBody Cards card) {
		return cardService.updateCardLimit(cardId, card.getTotalLimit());
	}
	
	@Operation(summary = "get all cards by card type")
	@GetMapping("/cardsByType/{cardType}")
	public List<Cards> getCardsByType(@PathVariable String cardType){
		return cardService.getCardByType(cardType);
	}
	
//	@PostMapping("/myCards")
//	public List<Cards> getCardDetails(@RequestBody Customer customer) {
//		List<Cards> cards = cardsRepository.findByCustomerId(customer.getCustomerId());
//		if (cards != null) {
//			return cards;
//		} else {
//			return null;
//		}
//
//	}

}
