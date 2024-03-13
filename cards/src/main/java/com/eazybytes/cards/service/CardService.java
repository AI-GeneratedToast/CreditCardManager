package com.eazybytes.cards.service;

import com.eazybytes.cards.model.Cards;
import com.eazybytes.cards.repository.CardsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import javax.security.auth.login.AccountException;


@Service
public class CardService {
    @Autowired
    private CardsRepository cardsRepository;

    public List<Cards> getAllCards(){
        List<Cards> allCards = new ArrayList<Cards>();
        cardsRepository.findAll().forEach(card -> allCards.add(card));
        return allCards;
    }

    public Cards getCardById(int id){
        return cardsRepository.findById(id).get();
    }

    public String saveCard(Cards card){

    	if (cardsRepository.findByCardNumber(card.getCardNumber()) == null ) {
          card.setCreateDt(LocalDate.now());
          cardsRepository.save(card);
          return "saved";
    	}else {
	        return "Card already exists!";
		}
    }

    public String deleteCard(int id){
        Cards cardFind = cardsRepository.findById(id).orElse(null);
        if(cardFind != null) {
            cardsRepository.deleteById(id);
            return "deleted!";
        }else {
            return "card not found!";
        }
    }

    public String updateCard(int id, Cards updateCard){
        Cards cardFind = cardsRepository.findById(id).orElse(null);
        if(cardFind != null){
            updateCard.setCardId(id);
            updateCard.setCreateDt(LocalDate.now());
            cardsRepository.save(updateCard);
            return "update successful!";
        }else {
            return "card not found!";
        }
    }

    //LES FONCTIONS DU LAB1
	public String deleteByCardNumber(String cardNumber) {
		Cards card = cardsRepository.findByCardNumber(cardNumber);
		if (card!=null) {
			cardsRepository.delete(card);
			return HttpStatus.OK+"Card deleted";
		}else {
            return  HttpStatus.NOT_FOUND+"\nCard not found!";
        }
	}
	
	public List<String> deleteCardsByCustomersId(int id) {
		List<String> deletedCards = new ArrayList<>();
		 for(Cards card : cardsRepository.findByCustomerId(id)) {
			 deletedCards.add("Card number deleted"+ card.getCardNumber());
			 cardsRepository.delete(card);
		 }
		 return  deletedCards;
	}
	
	public List<String> deleteMultipleCards(List<Integer> cardIds){
		List<String> deletedCards = new ArrayList<>();
		Cards cardFound;
		
		for (int i=0; i<cardIds.size() ;i++) {
			cardFound = cardsRepository.findByCardId(cardIds.get(i));
			if (cardFound != null) {
				deletedCards.add(cardFound.getCardNumber());
				cardsRepository.deleteById(cardIds.get(i));
			}else {
				deletedCards.add(cardIds.get(i)+" Does not exist");
			}
		}
		return deletedCards;
	}
    
	public String updateCardLimit(int cardId,int limit) {
		Cards cardFound = cardsRepository.findByCardId(cardId);
		if (cardFound == null) {
			return "The card does not exist";
		}else {
			cardFound.setTotalLimit(limit);
			cardsRepository.save(cardFound);
			return "Card " +cardFound.getCardId()+" has a new limit of "+cardFound.getTotalLimit();
		}
	}
	
	public List<Cards> getCardByType(String cardType) {
		return cardsRepository.findByCardType(cardType);
	}
	


}
