//<![CDATA[
					$(document).ready(function() {
						$('.imcompleto').click(function(){
							$('.dia_conclusao').fadeIn(1500);
							$('.data_conclusao').fadeOut(1500); 
												
						});
						$('.completo').click(function(){
							$('.dia_conclusao').fadeOut(1500); 
							$('.data_conclusao').fadeIn(1500);
							
						});

						$('td').click(function(){
							$(this).addClass('marca');
					
						});
						$('.titular').click(function(){
							$('.dados_titular').fadeOut(1500);
							});
						$('.no_titular').click(function(){
							$('.dados_titular').fadeIn(1500);
						});
						$('.resp_sim').click(function(){
							$('.responsavel_financas').fadeIn(1500);
							$('.nao_financas').fadeOut(1500);
							});
						$('.resp_nao').click(function(){
							$('.responsavel_financas').fadeOut(1500);
							$('.nao_financas').fadeIn(1500);
						});

					});
					
				// ]]>