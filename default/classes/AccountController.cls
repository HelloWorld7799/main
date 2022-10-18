public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Industry from Account LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountTypeType(string type){
        return [SELECT Id, Name, Type from Account Where Type=:type LIMIT 5];
    }
}
