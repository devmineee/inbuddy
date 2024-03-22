package com.inbuddy.server.journey.service;

import com.inbuddy.server.itemlist.repository.ItemlistRepository;
import com.inbuddy.server.itemlist.service.ItemService;
import com.inbuddy.server.journey.entity.Journey;
import com.inbuddy.server.journey.repository.JourneyRepository;
import com.inbuddy.server.users.entity.Users;
import com.inbuddy.server.users.repository.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class JourneyService {

    private final JourneyRepository journeyRepository;
    private final UsersRepository usersRepository;
    private final ItemService itemService;

    public List<Journey> getJourneysByUserId(int userId) {
        return journeyRepository.findByUserUserId(userId);
    }
    @Transactional
    public void createJourney(int userId, String journeyName, String flightCode,Date journeyCreationDate, Date journeyModificationDate){
        Users user = usersRepository.findByUserId(userId);
        Journey journey = Journey.createJourney(user,journeyName,flightCode,journeyCreationDate,journeyModificationDate);
        journeyRepository.save(journey);

        itemService.createItem(journey.getJourneyId(),"여권");
        itemService.createItem(journey.getJourneyId(),"지갑");
    }

}
