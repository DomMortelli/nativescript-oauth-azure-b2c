<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Counter">
    </ActionBar>

    <StackLayout>
      <FlexboxLayout flexDirection="row" justifyContent="center">
        <Button @tap="initAuth" text="-" class="btn btn-outline"/>
        <Label :text="message" alignSelf="baseline" class="h2"/>
        <Button @tap="increment" text="+" class="btn btn-outline"/>
      </FlexboxLayout>
      <Image v-if="surprise" src="~/images/NativeScript-Vue.png"/>
    </StackLayout>

  </Page>
</template>

<script>
  import { mapActions } from 'vuex';
  import * as tnsOAuthModule from 'nativescript-hello-world'
  export default {
    computed: {
      message () {
        return this.$store.state.counter.count.toString();
      },
      surprise () {
        return (this.$store.state.counter.count >= 5);
      },
    },
    methods: {
      login: function() {
        // tnsOAuthModule.login()
        //   .then(()=>{
        //       console.log('logged in');
        //       console.dir("accessToken " + tnsOAuthModule.accessToken());
        //   })
        //   .catch((er)=>{
        //       //do something with the error
        //       console.error('an error occured while login: ', er)
        //   });
      },
      initAuth: function() {
        var myInitOptions = {
            authority: 'https://login.microsoftonline.com/stagingauhtentication.onmicrosoft.com/oauth2/v2.0',
            authorizeEndpoint: '/authorize',
            tokenEndpoint: '/token',
            clientId: '3eb09b38-81bb-43ef-a32a-446253ee8e79',
            clientSecret: 'my-client-secret',
            redirectUri: 'ecomobilestaging://ecomobile',
            responseType: 'token',
            responseMode: 'fragment',
            additionalQueryParams: ['p=b2c_1_default'],
            scope: 'openid  https://stagingauhtentication.onmicrosoft.com/apis/user_impersonation',
        };
        // tnsOAuthModule.initCustom({
        //     credentials: myInitOptions,
        //     cookieDomains: [ 'stagingauhtentication.onmicrosoft.com'],
        // });
      },
    },
  };
</script>
